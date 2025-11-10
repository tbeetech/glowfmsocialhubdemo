#!/bin/bash
# GitHub Actions Self-Hosted Runner Setup Script
# Run this script on your VPS

set -e  # Exit on error

echo "=================================================="
echo "GitHub Actions Self-Hosted Runner Setup"
echo "=================================================="
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
  echo "⚠️  Not running as root. Some commands may require sudo."
  echo ""
fi

# Step 1: Create directory
echo "📁 Step 1: Creating runner directory..."
cd /opt
if [ -d "actions-runner" ]; then
  echo "   ⚠️  Directory already exists. Backing up..."
  mv actions-runner actions-runner.backup.$(date +%s)
fi
mkdir actions-runner && cd actions-runner
echo "   ✓ Directory created: /opt/actions-runner"
echo ""

# Step 2: Download runner
echo "📦 Step 2: Downloading GitHub Actions Runner..."
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
echo "   ✓ Downloaded runner package"
echo ""

# Step 3: Extract
echo "📂 Step 3: Extracting files..."
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz
echo "   ✓ Files extracted"
echo ""

# Step 4: Get token
echo "🔑 Step 4: Configuration"
echo ""
echo "=================================================="
echo "ACTION REQUIRED!"
echo "=================================================="
echo ""
echo "1. Open this URL in your browser:"
echo "   https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners/new"
echo ""
echo "2. Select 'Linux' as the OS"
echo ""
echo "3. Copy the TOKEN from the configuration command"
echo "   It looks like: AXXXXXXXXXXXXXXXXXXXXX"
echo ""
echo "4. Run this command with your token:"
echo ""
echo "   ./config.sh --url https://github.com/tbeetech/glowfmsocialhubdemo --token YOUR_TOKEN_HERE"
echo ""
echo "5. Press Enter for all prompts (accept defaults)"
echo ""
echo "6. After configuration completes, run:"
echo "   sudo ./svc.sh install"
echo "   sudo ./svc.sh start"
echo "   sudo ./svc.sh status"
echo ""
echo "=================================================="
echo ""
echo "You are now in: /opt/actions-runner"
echo "Ready to configure!"
echo ""

# Keep terminal in the runner directory
exec bash
