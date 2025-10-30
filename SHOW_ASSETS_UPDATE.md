# Show Listings & Ember Challenge Assets Update

## ✅ COMPLETED: All Assets Updated!

Successfully fetched and updated all Google Drive file IDs using the `id-fetcher.py` script.

## Updated Show Listings Images

All 9 show cover art images have been successfully mapped in `apps/web/lib/drive-assets.ts`:

### File: `apps/web/lib/drive-assets.ts`

```typescript
// Show Listings - 9 Hot Shows (UPDATED WITH ACTUAL FILE IDs)
showIjiAyo: "1ph4hdeuLfX-f367iddIXC_xtWMHd_Alc", // IJI AYO COVER ART.jpg
showMillionairesMindset: "1wX-4TrgdkztHjm2BXkRCxJXke61dhPGQ", // MILLIONAIRE'S MINDSET COVER ART.jpg
showGlowKiddies: "1d8QH6Xmtt3QOY1aXj2_izyiS4emZto24", // Glow_Kiddies_coverART.jpg
showLetsTalk: "1I6Yb1gYa8_E8aEZeRs1iFvuswaGYO7hS", // LET'S TALK.jpg
showYouAndTheLaw: "14YfgXjgurl-PGrWwMpwtVCqTXZQDWuX3", // YOU AND THE LAW COVER ART.jpg
showLoveSaturday: "1erBAf1it-swLPGDj0WoMX6Z6SDBkNmOH", // LOVE SATURDAY COVER ART.jpg
showKayefiNla: "11fnSbyWmdJ-zuvU5t9y64MKrpeDQIqyJ", // KAYEFI NLA COVER ART.jpg
showWomensWorld: "1kdnjAbGi_CDMPTRHmyavdQ8EoOcp7xKw", // WOMENS WORLD COVER ART.jpg
showTheNews: "169PzgpFiQb9d5etCsXjG4PNmMEr9jmWp", // THE NEWS COVER ART.jpg

// Logos and Branding
glowFmStandardLogo: "16R4aPLax6KiqLK0RVjDCsagmKSacyxOF", // standard glowfm logo.jpg
```

## Changes Completed ✅

### Show Listings Section
- ✅ Updated to display all 9 Hot Glow FM Shows
- ✅ Reduced "See Now" button width by 80% (changed from `w-full` to `px-6`)
- ✅ Added proper show metadata (category, time)
- ✅ Maintained carousel structure with navigation arrows
- ✅ All shows properly laid out in 3-column grid

### Ember Challenge Section
- ✅ Fixed "Here!!" badge positioning (now appears below the title with proper rotation)
- ✅ Added Glow FM Standard Logo in top right corner (circular white frame)
- ✅ Ensured confetti stays within section (added `overflow-hidden` to parent and nested confetti layers)
- ✅ Maintained guy with glasses image (`heroHostSmileCutout`)
- ✅ Proper z-index layering for all elements

## Next Steps

1. **Update the file IDs** in `apps/web/lib/drive-assets.ts` with the actual Google Drive file IDs
2. **Make sure all images are publicly shared** ("Anyone with the link can view")
3. **Test the page** to ensure all images load correctly
4. **Verify the UI** matches the design sample

## Show Details Reference

| Show Name | Category | Time |
|-----------|----------|------|
| IJI AYO | Cultural & Entertainment | 8:00am |
| Millionaires Mindset | Business & Finance | 10:00am |
| Glow Kiddies | Children & Family | 2:00pm |
| LET's TALK | Discussion & Talk | 4:00pm |
| YOU AND THE LAW | Legal & Advice | 6:00pm |
| Love Saturday | Music & Romance | 12:00pm |
| Kayefi Nla | Culture & Society | 7:00pm |
| Women's World | Women & Lifestyle | 3:00pm |
| The News | News & Current Affairs | 1:00pm |
