# Google Drive Assets Integration Guide

This document explains how to work with Google Drive assets in the GlowFM Social Hub project.

## Overview

The project uses Google Drive to host all UI assets (images) instead of local files. This approach:
- Reduces repository size
- Enables easy asset updates without redeployment
- Provides CDN-like performance through Google's infrastructure

## Files Structure

```
├── id-fetcher.py              # Python script to fetch Google Drive file IDs
├── drive_asset_map.csv        # CSV mapping of filenames to Drive IDs
├── apps/web/lib/drive-assets.ts  # Utility functions for Drive URLs
└── [CONFIDENTIAL - NOT COMMITTED]
    ├── credentials.json       # Google OAuth credentials
    ├── client_secret_*.json   # OAuth client secret
    ├── token.pickle          # OAuth token cache
    └── glowfm-drive-assets-*.json  # Service account key
```

## Setup Instructions

### 1. Prerequisites

Install required Python packages:
```bash
pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
```

### 2. Google Drive Configuration

1. Create a Google Cloud project at https://console.cloud.google.com
2. Enable the Google Drive API
3. Create OAuth 2.0 credentials (Desktop app)
4. Download the credentials as `credentials.json`
5. Place `credentials.json` in the project root

### 3. Fetch Asset IDs

Run the ID fetcher script to map all files in your Google Drive folder:

```bash
python id-fetcher.py
```

This will:
- Authenticate with Google Drive (browser window will open on first run)
- Scan the specified folder (ID: `1Vj4j4Uq55_vRUyMEU2H6SIjJByvNbhit`)
- Generate/update `drive_asset_map.csv` with file mappings

### 4. Update Asset References

The `drive-assets.ts` file contains all asset references:

```typescript
export const DRIVE_ASSETS = {
  heroMicProductCutout: "1QLOMuInN30mj49zRkob1m5RXxDdWpNku",
  // ... more assets
};
```

To add a new asset:
1. Upload the file to the Google Drive folder
2. Run `python id-fetcher.py`
3. Find the file in `drive_asset_map.csv`
4. Add it to the `DRIVE_ASSETS` object in `drive-assets.ts`

## Usage in Components

### Import the utility functions:

```typescript
import { getAsset, getDriveImageUrl } from "@/lib/drive-assets";
```

### Use with Next.js Image component:

```tsx
<Image
  src={getAsset("heroMicProductCutout")}
  alt="Microphone"
  fill
  className="object-contain"
/>
```

### Direct URL generation:

```typescript
// Full-size image
const url = getDriveImageUrl("FILE_ID_HERE");

// Thumbnail with specific size
const thumbnail = getDriveThumbnailUrl("FILE_ID_HERE", 800);
```

## Google Drive URL Formats

### Direct View URL (used by default):
```
https://drive.google.com/uc?export=view&id={FILE_ID}
```

### Thumbnail URL (optional):
```
https://lh3.googleusercontent.com/d/{FILE_ID}=s{SIZE}
```

## Asset Naming Convention

Assets in the Drive folder follow this naming pattern:

- `hero_*` - Hero section images
- `decor_*` - Decorative elements
- `showcase_*` - Product/feature showcases
- `equipment_*` - Equipment photos
- `people_*` - People/profile photos
- `gallery_*` - Gallery images
- `background_*` - Background images
- `feature_*` - Feature cards

## Security Notes

⚠️ **IMPORTANT**: Never commit these files:
- `credentials.json`
- `client_secret_*.json`
- `token.pickle`
- `glowfm-drive-assets-*.json`

These are already in `.gitignore`. Keep them secure and local only.

## Troubleshooting

### Images not loading?

1. **Check file permissions**: Ensure Drive files are set to "Anyone with the link can view"
2. **Verify file ID**: Check `drive_asset_map.csv` for correct IDs
3. **Test URL directly**: Paste the generated URL in a browser to confirm access

### Authentication issues?

1. Delete `token.pickle`
2. Re-run `python id-fetcher.py`
3. Complete the OAuth flow in the browser

### New assets not appearing?

1. Run `python id-fetcher.py` to refresh the mapping
2. Check that the file exists in the correct Drive folder
3. Verify the folder ID in `id-fetcher.py` (currently: `1Vj4j4Uq55_vRUyMEU2H6SIjJByvNbhit`)

## Performance Considerations

- Google Drive has rate limits; consider caching on production
- Use Next.js Image component for automatic optimization
- Consider implementing a fallback for offline development

## Development Workflow

1. Designer uploads new assets to Google Drive folder
2. Developer runs `python id-fetcher.py`
3. Developer updates `drive-assets.ts` with new asset keys
4. Use `getAsset()` in components
5. Commit only code changes (not credentials)

## Production Deployment

The assets are automatically served from Google Drive in production. No additional configuration needed beyond:

1. Ensuring all referenced assets are in the Drive folder
2. Files have proper viewing permissions
3. Asset references in code are correct

---

For questions or issues, contact the development team.
