# Git-First Deployment Workflow

## ✅ The Golden Rule

**NEVER edit files directly on the VPS!**

All changes flow through Git:
```
Local Dev → Git Commit → GitHub Push → Automatic Deploy → VPS
```

---

## 📝 Daily Workflow

### Making Changes

```powershell
# 1. Make your changes locally in VS Code
# Edit files, add features, fix bugs, etc.

# 2. Check what changed
git status

# 3. Stage changes
git add .

# 4. Commit with descriptive message
git commit -m "Add new feature: royal countdown design"

# 5. Push to GitHub
git push origin main

# 6. Automatic deployment happens!
# Go to: https://github.com/tbeetech/glowfmsocialhubdemo/actions
# Watch the deployment progress

# 7. Verify on your website
# Check: http://your-vps-ip:3000
```

---

## 🎯 What Gets Deployed Automatically

When you push to main, the VPS automatically:
1. ✅ Pulls latest code from GitHub
2. ✅ Discards any local VPS changes
3. ✅ Installs dependencies
4. ✅ Builds the application
5. ✅ Reloads PM2 services
6. ✅ Shows deployment status

**Time:** ~2-5 minutes per deployment

---

## 🔧 Configuration Changes

All configuration is in Git. To change PM2, environment, or build settings:

### PM2 Configuration
```javascript
// Edit: ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'glowfm-web',
      cwd: './apps/web',
      script: 'node_modules/.bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000  // Change port here
      }
    }
  ]
};

// Then commit and push
```

### Workflow Changes
```yaml
# Edit: .github/workflows/deploy.yml
# Change build steps, add tests, modify deployment logic
# Then commit and push
```

### Environment Variables
```bash
# Edit: infra/web.env.example or api.env.example
# Update the examples, then manually set on VPS once
# (env files are gitignored for security)
```

---

## 🚨 What If I Accidentally Edited on VPS?

If you made changes directly on the VPS:

### Option 1: Discard VPS Changes (Recommended)
```bash
# SSH into VPS
ssh root@178.79.187.252

# Go to project
cd /var/www/glowfmsocialhubdemo

# Discard all local changes
git fetch origin main
git reset --hard origin/main
git clean -fd

# Rebuild and restart
pnpm install
pnpm run build
pm2 reload ecosystem.config.js
```

### Option 2: Copy Changes Back to Local
```bash
# SSH into VPS
ssh root@178.79.187.252
cd /var/www/glowfmsocialhubdemo

# See what changed
git diff

# Create a patch
git diff > /tmp/vps-changes.patch

# Copy patch to local machine
# On your Windows machine:
scp root@178.79.187.252:/tmp/vps-changes.patch .

# Apply patch locally
git apply vps-changes.patch

# Review, commit, and push
git add .
git commit -m "Apply VPS changes to Git"
git push origin main

# Now VPS will sync back with GitHub
```

---

## 📊 Monitoring Deployments

### GitHub Actions Dashboard
```
https://github.com/tbeetech/glowfmsocialhubdemo/actions
```
- See all deployments
- View logs
- Check for errors
- Monitor timing

### VPS Status (if needed)
```bash
# SSH into VPS
ssh root@178.79.187.252

# Check PM2 services
pm2 status
pm2 logs glowfm-web --lines 50

# Check runner
sudo /opt/actions-runner/svc.sh status

# View latest commit
cd /var/www/glowfmsocialhubdemo
git log -1 --oneline
```

---

## 🔄 Rollback to Previous Version

If deployment breaks something:

### Quick Rollback
```powershell
# On your local machine

# 1. Find the last working commit
git log --oneline

# 2. Revert to that commit
git revert HEAD  # Reverts last commit
# or
git reset --hard abc123  # Replace abc123 with good commit hash

# 3. Push
git push origin main --force

# 4. Deployment runs automatically with old version
```

### Alternative: Rollback on VPS
```bash
# SSH into VPS
ssh root@178.79.187.252
cd /var/www/glowfmsocialhubdemo

# View commit history
git log --oneline

# Checkout previous commit
git checkout abc123  # Replace with good commit hash

# Rebuild
pnpm install
pnpm run build
pm2 reload ecosystem.config.js

# Then fix locally and push to get back on track
```

---

## 📦 Files Managed by Git

✅ **These are in Git (edit locally):**
- All source code (`apps/`, `packages/`)
- Configuration (`ecosystem.config.js`, `tsconfig.json`)
- Package files (`package.json`, `pnpm-lock.yaml`)
- Workflows (`.github/workflows/`)
- Documentation (`.md` files)

❌ **These are NOT in Git (VPS only):**
- `node_modules/` (generated)
- `dist/`, `.next/` (built files)
- `logs/` (PM2 logs)
- `.env` files (secrets)
- `actions-runner/` (GitHub runner)

---

## 🎓 Best Practices

### ✅ DO:
- Edit all code locally in VS Code
- Commit frequently with clear messages
- Push to main to deploy
- Use branches for experimental features
- Test locally before pushing
- Review GitHub Actions logs

### ❌ DON'T:
- Edit files directly on VPS with nano/vi
- Manually copy files to VPS
- Modify package.json on VPS
- Change ecosystem.config.js on VPS
- Create config files only on VPS

---

## 🚀 Advanced: Feature Branches

For bigger changes, use branches:

```powershell
# Create feature branch
git checkout -b feature/new-design

# Make changes
# Edit files...

# Commit
git add .
git commit -m "Work on new design"

# Push feature branch
git push origin feature/new-design

# Create PR on GitHub
# Review changes
# Merge to main when ready
# Deployment happens automatically
```

---

## 📞 Quick Commands Cheat Sheet

### Local Development
```powershell
git status              # See changes
git add .               # Stage all changes
git commit -m "msg"     # Commit
git push origin main    # Deploy
git log --oneline       # View history
```

### VPS Monitoring (read-only)
```bash
pm2 status              # Check services
pm2 logs                # View logs
git log -1              # Latest commit
sudo systemctl status actions.runner.*  # Runner status
```

### Emergency VPS Sync
```bash
cd /var/www/glowfmsocialhubdemo
git fetch origin main
git reset --hard origin/main
git clean -fd
pnpm install && pnpm run build
pm2 reload ecosystem.config.js
```

---

## ✨ Benefits of This Workflow

1. **No Merge Conflicts** - Single source of truth (GitHub)
2. **Version Control** - Full history of all changes
3. **Easy Rollbacks** - Just revert commits
4. **Team Ready** - Multiple developers can collaborate
5. **Automated** - Push = Deploy
6. **Consistent** - Same code everywhere
7. **Auditable** - See who changed what and when

---

**Remember:** Git is your deployment tool. Every change goes through Git!

**Last Updated:** November 10, 2025
