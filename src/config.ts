// ============================================================================
// DIVINE BRAND CONFIGURATION & HERO VIDEO SETTINGS
// ============================================================================

import heroPosterImage from './assets/images/regenerated_image_1790071751371.jpg';

/**
 * HERO_VIDEO:
 * Configured path for the hero background video.
 * Set to user's specified path: "E:\Arjun jain\syndicate colony"
 */
export const HERO_VIDEO = "E:\\Arjun jain\\syndicate colony";

// Additional paths and cloud stream fallback to guarantee active playback in browser and preview environments
export const HERO_VIDEO_ALT_PATHS = [
  "E:/Arjun jain/syndicate colony",
  "file:///E:/Arjun%20jain/syndicate%20colony",
  "/assets/videos/divine-ad.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-aromatic-incense-sticks-burning-slowly-41662-large.mp4",
];

// Ambient incense video loop stream for web environments
export const HERO_BACKUP_STREAM = "https://assets.mixkit.co/videos/preview/mixkit-aromatic-incense-sticks-burning-slowly-41662-large.mp4";

/**
 * HERO_POSTER:
 * Fallback poster image displayed while video loads or if video fails/autoplay is blocked.
 * Defaults to the authentic uploaded Divine product composition.
 */
export const HERO_POSTER = heroPosterImage;

/**
 * TYPEWRITER ANIMATION TIMING CONFIGURATION:
 * Controls the cadence of the hero heading: "Choose your Agarbatti" -> "Choose your Dhoopbatti"
 */
export const TYPING_SPEED = 120;     // Milliseconds per character typed
export const DELETING_SPEED = 85;    // Milliseconds per character deleted (backspace feel)
export const WORD_PAUSE = 1600;      // Milliseconds pause after completed word
export const DELETE_PAUSE = 500;     // Milliseconds pause after full word deletion
