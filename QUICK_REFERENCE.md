# Quick Reference Guide - GlowFM UI with Google Drive Assets

## 🚀 Quick Start

### View the Site Locally
```bash
cd c:\Users\tobir\Desktop\glowsite\glowfmsocialhubdemo
pnpm install
pnpm dev
```
Then open: http://localhost:3000

### Update Assets

1. **Upload new image to Google Drive** (Folder ID: `1Vj4j4Uq55_vRUyMEU2H6SIjJByvNbhit`)

2. **Run the ID fetcher:**
```bash
python id-fetcher.py
```

3. **Find the file ID in `drive_asset_map.csv`**

4. **Add to `apps/web/lib/drive-assets.ts`:**
```typescript
export const DRIVE_ASSETS = {
  // ...existing assets
  yourNewAsset: "FILE_ID_HERE",
};
```

5. **Use in your component:**
```tsx
import { getAsset } from "@/lib/drive-assets";

<Image src={getAsset("yourNewAsset")} alt="Description" fill />
```

## 📝 Key Files

| File | Purpose |
|------|---------|
| `apps/web/app/page.tsx` | Main homepage - all sections |
| `apps/web/lib/drive-assets.ts` | Asset ID mappings & helpers |
| `drive_asset_map.csv` | Complete file-to-ID reference |
| `id-fetcher.py` | Script to update asset IDs |
| `GOOGLE_DRIVE_ASSETS.md` | Full documentation |

## 🎨 Sections on Homepage (in order)

1. **Hero** - Main banner with microphone
2. **Ticker** - Scrolling Ember Challenge announcement
3. **Show Listings** - 3 show cards (Wellness, Fun Connect, Kiddies)
4. **Ember Challenge** - Live challenge promotion
5. **How To Steps** - Instructions for participation
6. **Countdown** - Timer to Jan 1, 2026
7. **Prizes** - Grid of prizes + list
8. **Grand Prize** - Laptop showcase
9. **Carry the Glow** - App download section
10. **About GlowFm** - Company description
11. **Programme Reviews** - Testimonials
12. **Social Links** - Twitter, YouTube, Facebook, TikTok, Instagram

## 🔧 Common Tasks

### Change Countdown Date
In `apps/web/app/page.tsx`:
```tsx
<CountdownClock targetDate={new Date("2026-01-01T00:00:00")} />
```

### Update Colors
In `apps/web/tailwind.config.ts`:
```typescript
primary: {
  DEFAULT: "#FF6B00",  // Orange
},
accent: {
  DEFAULT: "#D72638",  // Red
},
```

### Add New Section
```tsx
<AnimatedSection>
  <section className="py-20">
    <div className="container mx-auto px-4">
      {/* Your content */}
    </div>
  </section>
</AnimatedSection>
```

## 🔐 Security Reminders

**NEVER commit these files:**
- ❌ `credentials.json`
- ❌ `client_secret_*.json`
- ❌ `token.pickle`
- ❌ `glowfm-drive-assets-*.json`
- ❌ `*.zip` (large files)

✅ These are already in `.gitignore`

## 🌐 Google Drive Asset URL Format

```
https://drive.google.com/uc?export=view&id={FILE_ID}
```

Example:
```
https://drive.google.com/uc?export=view&id=1QLOMuInN30mj49zRkob1m5RXxDdWpNku
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Use Tailwind classes: `sm:`, `md:`, `lg:`, `xl:`

## 🐛 Troubleshooting

### Images not loading?
1. Check file permissions in Google Drive (set to "Anyone with link")
2. Verify file ID in `drive_asset_map.csv`
3. Test URL directly in browser

### Dev server won't start?
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Git push rejected?
- Check if you're accidentally committing credentials
- Review `.gitignore`
- Use `git status` to see what's staged

## 📞 Support

For issues:
1. Check `GOOGLE_DRIVE_ASSETS.md` for detailed docs
2. Review `UI_RECONSTRUCTION_SUMMARY.md` for implementation details
3. Contact development team

---

**Last Updated**: October 27, 2025  
**Version**: 1.0  
**Status**: ✅ Production Ready
