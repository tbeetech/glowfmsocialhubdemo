# VPS Deployment Diagnostics
# Run this script to check your VPS setup

Write-Host "=== VPS Deployment Diagnostics ===" -ForegroundColor Cyan
Write-Host ""

$VPS_HOST = "178.79.187.252"
$VPS_USER = "root"

# Test 1: Ping VPS
Write-Host "1. Testing VPS connectivity..." -ForegroundColor Yellow
$pingResult = Test-Connection -ComputerName $VPS_HOST -Count 2 -Quiet
if ($pingResult) {
    Write-Host "   ✓ VPS is reachable" -ForegroundColor Green
} else {
    Write-Host "   ✗ VPS is not reachable - check IP address and network" -ForegroundColor Red
}

# Test 2: Test SSH Port
Write-Host ""
Write-Host "2. Testing SSH port (22)..." -ForegroundColor Yellow
$tcpTest = Test-NetConnection -ComputerName $VPS_HOST -Port 22 -WarningAction SilentlyContinue
if ($tcpTest.TcpTestSucceeded) {
    Write-Host "   ✓ SSH port is open" -ForegroundColor Green
} else {
    Write-Host "   ✗ SSH port is blocked or not listening" -ForegroundColor Red
}

# Test 3: Try SSH connection
Write-Host ""
Write-Host "3. Testing SSH authentication..." -ForegroundColor Yellow
Write-Host "   Attempting SSH connection..." -ForegroundColor Gray
$sshTest = ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=no "${VPS_USER}@${VPS_HOST}" "echo 'SSH_SUCCESS'" 2>&1
if ($sshTest -match "SSH_SUCCESS") {
    Write-Host "   ✓ SSH authentication successful" -ForegroundColor Green
} else {
    Write-Host "   ✗ SSH authentication failed" -ForegroundColor Red
    Write-Host "   Error: $sshTest" -ForegroundColor Red
}

# Test 4: Check project directory
Write-Host ""
Write-Host "4. Checking project directory..." -ForegroundColor Yellow
$dirTest = ssh -o ConnectTimeout=10 "${VPS_USER}@${VPS_HOST}" "test -d /var/www/glowfmsocialhubdemo && echo 'DIR_EXISTS' || echo 'DIR_NOT_FOUND'" 2>&1
if ($dirTest -match "DIR_EXISTS") {
    Write-Host "   ✓ Project directory exists" -ForegroundColor Green
} else {
    Write-Host "   ✗ Project directory not found at /var/www/glowfmsocialhubdemo" -ForegroundColor Red
}

# Test 5: Check git remote
Write-Host ""
Write-Host "5. Checking git remote configuration..." -ForegroundColor Yellow
$gitRemote = ssh -o ConnectTimeout=10 "${VPS_USER}@${VPS_HOST}" "cd /var/www/glowfmsocialhubdemo 2>/dev/null && git remote get-url origin 2>/dev/null" 2>&1
if ($gitRemote -match "github.com") {
    Write-Host "   ✓ Git remote configured: $gitRemote" -ForegroundColor Green
} else {
    Write-Host "   ✗ Git remote not configured or incorrect" -ForegroundColor Red
    Write-Host "   Run: git remote add origin https://github.com/tbeetech/glowfmsocialhubdemo.git" -ForegroundColor Yellow
}

# Test 6: Check required tools
Write-Host ""
Write-Host "6. Checking installed tools..." -ForegroundColor Yellow
$tools = @("node", "pnpm", "pm2", "git")
foreach ($tool in $tools) {
    $toolCheck = ssh -o ConnectTimeout=10 "${VPS_USER}@${VPS_HOST}" "which $tool 2>/dev/null" 2>&1
    if ($toolCheck -match "/") {
        Write-Host "   ✓ $tool is installed at $toolCheck" -ForegroundColor Green
    } else {
        Write-Host "   ✗ $tool is not installed" -ForegroundColor Red
    }
}

# Summary
Write-Host ""
Write-Host "=== Diagnostics Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. If SSH authentication failed, check your SSH key in GitHub Secrets" -ForegroundColor White
Write-Host "2. If git remote is not configured, SSH into VPS and set it up" -ForegroundColor White
Write-Host "3. If tools are missing, SSH into VPS and install them" -ForegroundColor White
Write-Host "4. Consider using a self-hosted GitHub Actions runner (see VPS_DEPLOYMENT_TROUBLESHOOTING.md)" -ForegroundColor White
Write-Host ""
Write-Host "For detailed troubleshooting, see: VPS_DEPLOYMENT_TROUBLESHOOTING.md" -ForegroundColor Cyan
