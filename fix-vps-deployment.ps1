# Fix VPS Deployment Issues
Write-Host "=== FIXING VPS DEPLOYMENT ISSUES ===" -ForegroundColor Yellow

$vpsHost = "root@185.113.249.58"
$projectPath = "/var/www/glowfmsocialhubdemo"

Write-Host "`n1. Connecting to VPS to fix git issues..." -ForegroundColor Cyan

# Step 1: Fix git lock file conflict and update to latest
ssh $vpsHost @"
cd $projectPath
echo "Current commit:"
git log --oneline -1

echo "`nFixing pnpm-lock.yaml conflict..."
git checkout -- pnpm-lock.yaml

echo "`nPulling latest changes..."
git pull origin main

echo "`nNew commit:"
git log --oneline -1
"@

Write-Host "`n2. Rebuilding and restarting application..." -ForegroundColor Cyan

# Step 2: Clean rebuild and restart
ssh $vpsHost @"
cd $projectPath

echo "Stopping PM2 process..."
pm2 stop glowfm-web

echo "Cleaning and installing dependencies..."
rm -rf node_modules apps/web/.next apps/web/node_modules
pnpm install

echo "Building application..."
cd apps/web
pnpm run build

echo "Starting PM2 process..."
cd $projectPath
pm2 start glowfm-web

echo "Checking new status..."
pm2 status
"@

Write-Host "`n3. Verifying deployment..." -ForegroundColor Green

# Step 3: Verify everything is working
ssh $vpsHost @"
echo "Final verification:"
echo "Git status:"
cd $projectPath && git status --porcelain

echo "`nPM2 status:"
pm2 status

echo "`nPort 3000 check:"
netstat -tlnp | grep :3000

echo "`nRecent logs:"
pm2 logs glowfm-web --lines 5
"@

Write-Host "`n=== DEPLOYMENT FIX COMPLETED ===" -ForegroundColor Green
Write-Host "Your website should now be updated with the latest changes!" -ForegroundColor Yellow
Write-Host "Visit your website to verify the updates are live." -ForegroundColor Cyan