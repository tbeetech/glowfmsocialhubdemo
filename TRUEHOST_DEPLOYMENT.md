# Deployment Guide for Truehost VPS

Since SSH from your local machine times out, use Truehost's web console to deploy.

---

## 🖥️ Access Truehost Console

1. Log in to your Truehost account
2. Go to your VPS dashboard
3. Click **"Console"** or **"Launch Console"** button
4. This opens a web-based terminal directly to your VPS

---

## 🚀 Deploy Your Changes

Once in the Truehost console, copy and paste these commands:

```bash
# Navigate to project
cd /var/www/glowfmsocialhubdemo

# Pull latest changes from GitHub
git pull origin main

# Set up environment for pnpm
export PNPM_HOME=$HOME/.local/share/pnpm
export PATH=$PNPM_HOME:$PATH

# Install dependencies
pnpm install --frozen-lockfile

# Build the application
pnpm run build

# Restart services
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js

# Check status
pm2 status
```

**That's it!** Your site will be updated with the latest code from GitHub.

---

## 📝 Your Complete Workflow

### Local Development (Windows):
```powershell
# 1. Make changes in VS Code
# Edit your files...

# 2. Commit changes
git add .
git commit -m "Your change description"

# 3. Push to GitHub
git push origin main
```

### Deployment (Truehost Console):
```bash
# Just run these 3 commands:
cd /var/www/glowfmsocialhubdemo
git pull origin main
export PNPM_HOME=$HOME/.local/share/pnpm && export PATH=$PNPM_HOME:$PATH && pnpm install --frozen-lockfile && pnpm run build && pm2 reload ecosystem.config.js
```

---

## 🔧 One-Time Setup (If Not Done Yet)

If you haven't set up the project on your VPS yet, run these commands in Truehost console:

```bash
# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2
npm install -g pm2

# Create project directory
sudo mkdir -p /var/www/glowfmsocialhubdemo
cd /var/www/glowfmsocialhubdemo

# Clone from GitHub
git init
git remote add origin https://github.com/tbeetech/glowfmsocialhubdemo.git
git fetch origin main
git reset --hard origin/main

# Install and build
export PNPM_HOME=$HOME/.local/share/pnpm
export PATH=$PNPM_HOME:$PATH
pnpm install --frozen-lockfile
pnpm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Run the command it gives you
```

---

## 🎯 Quick Commands Cheat Sheet

### Update Code:
```bash
cd /var/www/glowfmsocialhubdemo && git pull origin main
```

### Full Deploy:
```bash
cd /var/www/glowfmsocialhubdemo && git pull origin main && export PNPM_HOME=$HOME/.local/share/pnpm && export PATH=$PNPM_HOME:$PATH && pnpm install --frozen-lockfile && pnpm build && pm2 reload ecosystem.config.js
```

### Check Status:
```bash
pm2 status
pm2 logs glowfm-web --lines 50
```

### Restart Services:
```bash
pm2 restart all
```

### View Latest Commit:
```bash
cd /var/www/glowfmsocialhubdemo && git log -1 --oneline
```

---

## 💡 Tips

1. **Keep the Truehost Console Tab Open** - You can leave it open in your browser for quick deployments

2. **Bookmark This Guide** - Keep it handy for reference

3. **Copy-Paste is Your Friend** - The commands are designed to be copied and pasted as-is

4. **Check PM2 Logs** - If something doesn't work: `pm2 logs`

5. **Git-First Still Applies** - All changes go through Git, you just deploy via console instead of SSH

---

## ❓ Common Issues

### "Permission denied"
```bash
sudo chown -R $USER:$USER /var/www/glowfmsocialhubdemo
```

### "pnpm: command not found"
```bash
npm install -g pnpm
export PNPM_HOME=$HOME/.local/share/pnpm
export PATH=$PNPM_HOME:$PATH
```

### "pm2: command not found"
```bash
npm install -g pm2
```

### Services not starting
```bash
pm2 delete all
pm2 start ecosystem.config.js
pm2 save
```

---

## 🎉 Benefits of This Approach

✅ No firewall configuration needed
✅ Direct access through Truehost
✅ Still using Git (no merge conflicts)
✅ Simple copy-paste deployment
✅ Full control over deployments

---

**Last Updated:** November 10, 2025
