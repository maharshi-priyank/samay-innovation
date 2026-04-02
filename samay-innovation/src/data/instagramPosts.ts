/**
 * Instagram posts for the homepage gallery.
 *
 * HOW TO UPDATE:
 * 1. Go to https://www.instagram.com/samayinnovation/
 * 2. Open the post you want to feature → copy its URL (e.g. https://www.instagram.com/p/ABC123/)
 * 3. Upload the post image to Cloudinary (same account: diojzujpv)
 *    → Cloudinary Dashboard → Upload → copy the URL
 * 4. Add / replace an entry below with the new image URL + post URL + caption
 * 5. Redeploy — done.
 *
 * Recommended: keep 9 posts (fills the 3×3 grid perfectly).
 */

export interface InstagramPost {
  id: number;
  /** Cloudinary URL — use w_600,h_600,c_fill,g_auto transform for square crops */
  image: string;
  /** Short caption shown on hover */
  caption: string;
  /** Direct link to the Instagram post or reel. Use profile URL if you don't have the post URL. */
  postUrl: string;
  /**
   * Optional: set to 'reel' to show a play button and enable inline playback.
   * Requires embedPath.
   */
  type?: 'post' | 'reel';
  /**
   * The embed path used to build https://www.instagram.com/{embedPath}/embed/
   * Examples:
   *   reel/DUTFFeCksfH  → from https://www.instagram.com/reel/DUTFFeCksfH/
   *   p/DV1CcfziOin     → from https://www.instagram.com/p/DV1CcfziOin/
   */
  embedPath?: string;
}

const PROFILE_URL = 'https://www.instagram.com/samayinnovation/';

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/arvind-villa-khatraj/nm-08573.jpg',
    caption: 'Arvind Villa, Khatraj — Where luxury meets restraint.',
    postUrl: 'https://www.instagram.com/samayinnovation/reel/DUTFFeCksfH/',
    type: 'reel',
    embedPath: 'reel/DUTFFeCksfH',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/venice-bungalows/01.jpg',
    caption: 'Venice Bungalows — Layered textures, timeless palette.',
    postUrl: PROFILE_URL,
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/indraprashtha/01.jpg',
    caption: 'Indraprashtha — Refined living for a modern family.',
    postUrl: PROFILE_URL,
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/parijaat-eclat-4bhk/nm-00007.jpg',
    caption: 'Parijaat Eclat 4BHK — Sculptural forms, warm tones.',
    postUrl: PROFILE_URL,
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/farmhouse-rancharda/nm-08673.jpg',
    caption: 'Rancharda Farmhouse — Earthy luxury, seamless outdoors.',
    postUrl: PROFILE_URL,
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/parijaat-eclat-4bhk/nm-00065.jpg',
    caption: 'Parijaat Eclat — Detail that speaks for itself.',
    postUrl: PROFILE_URL,
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/venice-bungalows/02.jpg',
    caption: 'Venice Bungalows — Natural light as a design tool.',
    postUrl: PROFILE_URL,
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/ashutosh-kumar-3bhk/image00013.jpg',
    caption: 'Ashutosh Kumar 3BHK — Compact, considered, complete.',
    postUrl: PROFILE_URL,
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/event-office/nm-00076.jpg',
    caption: 'Event Office — Commercial interiors with character.',
    postUrl: PROFILE_URL,
  },
  {
    id: 10,
    // TODO: replace with actual thumbnail uploaded to Cloudinary
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/arvind-villa-khatraj/nm-08573.jpg',
    caption: 'Latest reel — swipe to see the transformation.',
    postUrl: 'https://www.instagram.com/p/DV1CcfziOin/',
    type: 'reel',
    embedPath: 'p/DV1CcfziOin',
  },
];
