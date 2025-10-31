# Testing Checklist - Carousel & Visual Updates

## Development Server
✅ Server running at `http://localhost:3000`
✅ No build errors
✅ No TypeScript errors

---

## 1. Carousel Functionality Tests

### Navigation
- [ ] Click right arrow → advances to next 3 shows
- [ ] Click left arrow → goes back to previous 3 shows
- [ ] Click right arrow on last slide → wraps to first slide
- [ ] Click left arrow on first slide → wraps to last slide
- [ ] Arrow buttons have hover effects (shadow increases)

### Pagination Dots
- [ ] 3 pagination dots visible below carousel
- [ ] Active dot is highlighted (indigo color)
- [ ] Click dot 1 → shows first 3 programs
- [ ] Click dot 2 → shows middle 3 programs
- [ ] Click dot 3 → shows last 3 programs
- [ ] Dots update correctly when using arrow buttons

### Display
- [ ] Exactly 3 shows visible at a time
- [ ] Show images load correctly from Google Drive
- [ ] Show titles, categories, and times display properly
- [ ] "See Now →" buttons are compact (not full width)
- [ ] Hover effects work on show cards (shadow + translate)

### Responsive Design
- [ ] Desktop (≥768px): 3 columns grid
- [ ] Mobile (<768px): Single column layout
- [ ] Arrow buttons are accessible on all screen sizes
- [ ] No horizontal overflow on mobile

---

## 2. Visual Effects Tests

### Hero Section Grid
- [ ] Animated grid background is clearly visible
- [ ] Grid opacity appears around 70%
- [ ] Grid animation (movement) is smooth
- [ ] Grid doesn't interfere with text readability

### Animated Gradient Background
- [ ] Purple oval visible in top-left area (15%, 25%)
- [ ] Orange oval visible in bottom-right area (85%, 75%)
- [ ] Navy blue oval visible in center area (50%, 50%)
- [ ] Gradient ovals are semi-transparent (~20% opacity)
- [ ] Gradient animation is smooth (25s cycle)
- [ ] No performance issues with animation

### Glassy/Translucent Effect
- [ ] Overall background has glassy appearance
- [ ] Backdrop blur effect is visible
- [ ] 20% transparency creates layered effect
- [ ] Text remains readable over gradient

---

## 3. Show Data Verification

Verify all 9 shows display with correct information:

| # | Show Name | Category | Time |
|---|-----------|----------|------|
| 1 | IJI AYO | Cultural & Entertainment | 8:00am |
| 2 | Millionaires Mindset | Business & Finance | 10:00am |
| 3 | Glow Kiddies | Children & Family | 2:00pm |
| 4 | LET's TALK | Discussion & Talk | 4:00pm |
| 5 | YOU AND THE LAW | Legal & Advice | 6:00pm |
| 6 | Love Saturday | Music & Romance | 12:00pm |
| 7 | Kayefi Nla | Culture & Society | 7:00pm |
| 8 | Women's World | Women & Lifestyle | 3:00pm |
| 9 The News | News & Current Affairs | 1:00pm |

- [ ] All show names spelled correctly
- [ ] All categories match
- [ ] All times display correctly
- [ ] All images load successfully

---

## 4. Browser Compatibility

Test on multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 5. Performance Tests

- [ ] Page loads within 3 seconds
- [ ] Carousel navigation is instant (no lag)
- [ ] Gradient animation doesn't cause frame drops
- [ ] Smooth scrolling throughout page
- [ ] Images load progressively (Next.js optimization)

---

## 6. Accessibility Tests

- [ ] Arrow buttons have proper ARIA labels
- [ ] Keyboard navigation works (Tab, Enter, Arrow keys)
- [ ] Focus states are visible
- [ ] Screen reader can announce show information
- [ ] Color contrast meets WCAG standards

---

## 7. Integration Tests

### Existing Sections
- [ ] Ember Challenge section still works correctly
- [ ] Countdown clock displays and functions
- [ ] Footer displays properly
- [ ] Navigation bar is functional
- [ ] All other sections remain unchanged

### No Regressions
- [ ] No broken images
- [ ] No layout shifts
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Dark mode still works (if applicable)

---

## 8. Edge Cases

- [ ] Fast clicking carousel buttons doesn't break state
- [ ] Rapid pagination dot clicks work correctly
- [ ] Window resize maintains proper layout
- [ ] Page refresh maintains proper state
- [ ] Browser back/forward doesn't cause issues

---

## 9. Issues Found

### Template for Reporting Issues:

**Issue #1:**
- **Description**: 
- **Steps to Reproduce**: 
- **Expected Behavior**: 
- **Actual Behavior**: 
- **Priority**: High / Medium / Low
- **Status**: Open / In Progress / Resolved

*(Add more issue templates as needed)*

---

## 10. Sign-Off

### Tested By:
- **Name**: 
- **Date**: 
- **Environment**: 
  - OS: 
  - Browser: 
  - Screen Size: 

### Test Results:
- **Total Tests**: 
- **Passed**: 
- **Failed**: 
- **Overall Status**: ✅ Pass / ❌ Fail / ⚠️ Partial

### Notes:


---

## Next Steps After Testing

If all tests pass:
1. ✅ Commit changes to Git
2. ✅ Push to GitHub
3. ✅ Deploy to VPS
4. ✅ Verify on production (glowfmradio.com)
5. ✅ Monitor for any issues

If issues found:
1. ❌ Document issues in section 9
2. ❌ Prioritize fixes
3. ❌ Fix critical issues first
4. ❌ Re-test after fixes
5. ❌ Repeat until all pass

---

## Deployment Commands

Once testing is complete and approved:

```powershell
# 1. Commit changes
cd c:\Users\tobir\Desktop\glowsite\glowfmsocialhubdemo
git add .
git commit -m "Implement carousel functionality and add animated gradient background"
git push origin main

# 2. Deploy to VPS
ssh ubuntu@185.113.249.58
cd /var/www/glowfmsocialhubdemo
git pull origin main
cd apps/web
pnpm install
pnpm build
pm2 restart glow-web
pm2 logs glow-web --lines 50

# 3. Verify deployment
curl -I http://glowfmradio.com
```

---

**Remember**: Test locally first before deploying to production!
