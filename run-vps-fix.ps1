# Simple VPS Deployment Fix
Write-Host "=== VPS DEPLOYMENT FIX ===" -ForegroundColor Yellow

$vpsHost = "root@185.113.249.58"

Write-Host "1. Copying fix script to VPS..." -ForegroundColor Cyan
scp "c:\Users\tobir\Desktop\glowsite\glowfmsocialhubdemo\fix-vps.sh" "${vpsHost}:/tmp/fix-vps.sh"

Write-Host "2. Running fix script on VPS..." -ForegroundColor Cyan
ssh $vpsHost "chmod +x /tmp/fix-vps.sh && /tmp/fix-vps.sh"

Write-Host "3. Deployment fix completed!" -ForegroundColor Green