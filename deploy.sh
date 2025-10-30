#!/bin/bash

##############################################
# GlowFM VPS Deployment Script
##############################################

set -e  # Exit on error

# Configuration - UPDATE THESE VALUES
VPS_HOST="your_vps_ip_or_domain"
VPS_USER="root"
VPS_PORT="22"
APP_DIR="/var/www/glowfm"
DOMAIN="your-domain.com"  # Optional: for Nginx configuration

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting GlowFM Deployment to VPS${NC}"

# Function to run commands on VPS
run_on_vps() {
    ssh -p $VPS_PORT $VPS_USER@$VPS_HOST "$1"
}

# 1. Build locally
echo -e "${YELLOW}📦 Building application locally...${NC}"
pnpm install --frozen-lockfile
pnpm run build

# 2. Create deployment package
echo -e "${YELLOW}📦 Creating deployment package...${NC}"
tar -czf deploy.tar.gz \
    apps/web/.next \
    apps/web/public \
    apps/web/package.json \
    apps/web/next.config.js \
    package.json \
    pnpm-lock.yaml \
    pnpm-workspace.yaml \
    node_modules

# 3. Upload to VPS
echo -e "${YELLOW}📤 Uploading to VPS...${NC}"
scp -P $VPS_PORT deploy.tar.gz $VPS_USER@$VPS_HOST:/tmp/

# 4. Setup on VPS
echo -e "${YELLOW}🔧 Setting up on VPS...${NC}"
run_on_vps "
    set -e
    
    # Create app directory
    mkdir -p $APP_DIR
    
    # Extract files
    cd $APP_DIR
    tar -xzf /tmp/deploy.tar.gz
    rm /tmp/deploy.tar.gz
    
    # Install Node.js if not installed
    if ! command -v node &> /dev/null; then
        curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
        apt-get install -y nodejs
    fi
    
    # Install pnpm if not installed
    if ! command -v pnpm &> /dev/null; then
        npm install -g pnpm
    fi
    
    # Install PM2 if not installed
    if ! command -v pm2 &> /dev/null; then
        npm install -g pm2
    fi
    
    # Stop existing process
    pm2 delete glowfm-web || true
    
    # Start the application
    cd $APP_DIR
    pm2 start pnpm --name glowfm-web -- run start
    pm2 save
    pm2 startup
    
    echo '✅ Application deployed successfully!'
"

# 5. Verify deployment
echo -e "${YELLOW}🔍 Verifying deployment...${NC}"
run_on_vps "pm2 status glowfm-web"

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Your app should be running on http://$VPS_HOST:3000${NC}"
echo -e "${YELLOW}⚠️  Don't forget to configure Nginx as reverse proxy if needed${NC}"

# Cleanup
rm -f deploy.tar.gz
