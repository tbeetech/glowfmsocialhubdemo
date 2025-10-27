/**
 * Google Drive Asset Manager
 * Converts Google Drive file IDs to direct image URLs
 */

export const DRIVE_ASSETS = {
  // Hero Section
  heroMicProductCutout: "1QLOMuInN30mj49zRkob1m5RXxDdWpNku",
  heroHostStageCutout: "1p3up5aNZc5a22bvYWSd14k4bEl3LwsK0",
  heroHostStageCutoutAlt: "1sMnSWo-0Rhqn3_0rcqfSAT0FpHKCEypZ",
  heroBackgroundGradient: "1_9FD4nSa7SpxGr3DYP6uhY4Yb6c_4des",
  decorHeroGlowGrid: "1jImgBfctNHjWd2gn3AlyUztZ5mKywe1z",

  // Show Listings Gallery
  listenerProfile01: "1iebFYN7XbAgnkWxukdkdrLDPQy2NC63Z",
  listenerProfile02: "1b_Iby4t_LTZ4K58vmdlhtZg6RyMugxYZ",
  listenerProfile03: "1nOg9L7TR0AvQDeDUSPm4SEuw50likjNP",

  // Glow Ember Challenge
  heroHostSmileCutout: "1TFXmMAXVHGBTPOLJ1vvEkwsnoPowc6Hu",
  decorSignalCluster: "1I4GvvB2fF1cAreTzTbkIFb0JEYH_UZsk",
  
  // Get on the Ember Challenge Stage
  galleryRunwayPoseCutout: "1OMeH5I7i39NxzRczM_u5ds9G-SAB2xme",
  decorDottedArrowPath: "1HVveJJV2VHaoYJD3-QT17wJPfHrDCKCn",
  
  // Countdown Section
  decorGradientPadFrame: "1LCB6AF81pDgrDSQeJgQAapR0xcFqXPso",
  
  // Prizes Section
  showcaseBagStory01: "1ZHSuKY3XnNY86FbkF9G-UXV_aI0RnUd8",
  showcaseBagStory02: "1Ux6cbKZcF9VVv4cVLzPLH42s8csDwFLU",
  showcaseBagStory03: "1Sc1QKSdMNigevkd8TXaDXdEziSQIulzi",
  showcaseBagStory04: "1IeM2xwPCx_m1mnLm5J9nGgRMng1rlrGf",
  
  // Grand Prize - Laptop
  equipmentBroadcastLaptopCutout: "1IJcelCsxkGSbFWs9PtZS0sDNhZnbpDIh",
  equipmentBroadcastLaptop: "172ybFzduvm5AfII45iVXFMU1-G7QY0qn",
  
  // Carry the Glow
  decorGlassPip: "1NlH7uBLse25kjKTRADfnMVi1UOD_lk7T",
  
  // About Glow FM
  caseStudyNotebookWorkspaceWarm: "19MOXd4YbeMz0F5SdWUsOxDKEg6X17jTh",
  
  // Programme Reviews
  featureCardHostReview: "1yaxYBldTapU3xhEz_5BRmGY82Ltpu6Lh",
  
  // Backgrounds
  backgroundSectionSoftWhite: "1TTS91QdhnxjRiiLFW40sTVUS4MozKlha",
  backgroundSectionSoftWhiteAlt: "1xTlKDonshgeVHdRLvaZXytv7QM6LZHP0",
  
  // Decorative elements
  decorAudioWaveIcon: "1H8gJi471_i5PQ9UM9bU-yybkT1q5KrYR",
  decorProfileRingBadge: "1t3Px66HbZ0iNhP2bAaq983sAoVzsR6jN",
  decorStageLightRingCutout: "1Ar8ADg4ig-fxmBRCWM0gxxk_ggbjtuAC",
  ctaGlassPanel: "1v-iwCle-e2VSyPXh5xifyeUvqpF8pJWo",
} as const;

/**
 * Generate Google Drive direct image URL
 * NOTE: Files MUST be shared as "Anyone with the link can view"
 * @param fileId - Google Drive file ID
 * @returns Direct image URL
 */
export function getDriveImageUrl(fileId: string): string {
  // This format works when files are publicly shared
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

/**
 * Generate Google Drive thumbnail URL
 * NOTE: Files MUST be shared as "Anyone with the link can view"
 * @param fileId - Google Drive file ID
 * @returns Thumbnail URL
 */
export function getDriveThumbnailUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}

/**
 * Get asset URL by key
 */
export function getAsset(key: keyof typeof DRIVE_ASSETS): string {
  return getDriveImageUrl(DRIVE_ASSETS[key]);
}
