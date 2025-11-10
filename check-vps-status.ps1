# VPS Status Check Script
# Check current deployment status

$VPS_HOST = "185.113.249.58"
$VPS_USER = "root"
$APP_DIR = "/var/www/glowfmsocialhubdemo"

Write-Host "🔍 Checking VPS deployment status..." -ForegroundColor Green
Write-Host ""

$checkCommands = @"
echo 'Current directory and git status:'; \
cd $APP_DIR; \
pwd; \
git log -1 --oneline; \
git status; \
echo ''; \
echo 'PM2 process status:'; \
pm2 status; \
echo ''; \
echo 'Port 3000 status:'; \
netstat -tlnp | grep :3000; \
echo ''; \
echo 'System resources:'; \
free -h; \
df -h /var/www; \
echo ''; \
echo 'Recent PM2 logs:'; \
pm2 logs glowfm-web --lines 10
"@

Write-Host "Connecting to VPS for status check..." -ForegroundColor Yellow

ssh ${VPS_USER}@${VPS_HOST} $checkCommands

Write-Host ""
Write-Host "Status check completed!" -ForegroundColor Green