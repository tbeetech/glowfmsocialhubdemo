#!/bin/bash

# VPS Deployment Fix Script
echo "=== FIXING VPS DEPLOYMENT ISSUES ==="

PROJECT_PATH="/var/www/glowfmsocialhubdemo"

echo "1. Fixing git issues and updating code..."
cd $PROJECT_PATH

echo "Current commit:"
git log --oneline -1

echo "Fixing pnpm-lock.yaml conflict..."
git checkout -- pnpm-lock.yaml

echo "Pulling latest changes..."
git pull origin main

echo "New commit:"
git log --oneline -1

echo ""
echo "2. Rebuilding application..."

echo "Stopping PM2 process..."
pm2 stop glowfm-web

echo "Cleaning old builds..."
rm -rf node_modules apps/web/.next apps/web/node_modules

echo "Installing dependencies..."
pnpm install

echo "Building web application..."
cd apps/web
pnpm run build

echo ""
echo "3. Restarting services..."
cd $PROJECT_PATH

echo "Starting PM2 process..."
pm2 restart glowfm-web || pm2 start apps/web/package.json --name glowfm-web

echo ""
echo "4. Verification..."
echo "PM2 status:"
pm2 status

echo ""
echo "Git status:"
git status --short

echo ""
echo "Port 3000 check:"
netstat -tlnp | grep :3000

echo ""
echo "Recent logs (last 3 lines):"
pm2 logs glowfm-web --lines 3

echo ""
echo "=== DEPLOYMENT FIX COMPLETED ==="
echo "Your website should now be updated!"