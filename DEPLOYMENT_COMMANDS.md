# GlowFM VPS Deployment Commands
# Run these commands after SSH-ing into your VPS

## Step 1: SSH into your VPS
# Run this in PowerShell:
ssh root@185.113.249.58

## Step 2: Navigate to project directory
cd /var/www/glowfmsocialhubdemo

## Step 3: Pull latest changes from GitHub
git pull origin main

## Step 4: Install dependencies
pnpm install --frozen-lockfile

## Step 5: Build the application
pnpm run build

## Step 6: Restart PM2 process
pm2 restart glowfm-web

# If the PM2 process doesn't exist, start it with:
# pm2 start pnpm --name glowfm-web -- run start

## Step 7: Save PM2 configuration
pm2 save

## Step 8: Check status
pm2 status

## Step 9: View logs (optional)
pm2 logs glowfm-web --lines 50

## Step 10: Test the deployment
# Visit: https://glowfmradio.com

# ============================================
# Quick one-liner (copy-paste all at once):
# ============================================

cd /var/www/glowfmsocialhubdemo && \
git pull origin main && \
pnpm install --frozen-lockfile && \
pnpm run build && \
pm2 restart glowfm-web && \
pm2 save && \
echo "✅ Deployment completed!" && \
pm2 status

# ============================================
# Troubleshooting
# ============================================

# If build fails, check logs:
pm2 logs glowfm-web --err

# If Nginx needs restart:
sudo systemctl restart nginx

# Check Nginx configuration:
sudo nginx -t

# View Nginx error logs:
sudo tail -f /var/log/nginx/error.log
