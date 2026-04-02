/**
 * Instagram posts for the homepage gallery.
 *
 * HOW TO UPDATE:
 * - For reels: add type:'reel' + embedPath (e.g. 'reel/DTpusvRkuUj')
 *   and place the thumbnail in /public/assets/images/reel/
 * - For regular posts: add a Cloudinary image URL (w_600,h_600,c_fill,g_auto)
 *
 * Keep 9 entries — fills the grid perfectly (2 landscape + 3 square + 4 square).
 */

export interface InstagramPost {
  id: number;
  /** Thumbnail shown in the grid — local path or Cloudinary URL */
  image: string;
  /** Short caption shown on hover */
  caption: string;
  /** Direct link to the Instagram post/reel */
  postUrl: string;
  /**
   * Set to 'reel' to show a play badge and enable inline playback.
   * Requires embedPath.
   */
  type?: 'post' | 'reel';
  /**
   * Path used to build https://www.instagram.com/{embedPath}/embed/
   * e.g. 'reel/DTpusvRkuUj' or 'p/DV1CcfziOin'
   */
  embedPath?: string;
}

const PROFILE_URL = 'https://www.instagram.com/samayinnovation/';

export const instagramPosts: InstagramPost[] = [
  // ── Reels (with local thumbnails) ──────────────────────────────────────────
  {
    id: 1,
    image: '/assets/images/reel/reel1.png',
    caption: 'A space transformed — watch the full reveal.',
    postUrl: 'https://www.instagram.com/reel/DTpusvRkuUj/',
    type: 'reel',
    embedPath: 'reel/DTpusvRkuUj',
  },
  {
    id: 2,
    image: '/assets/images/reel/reel2.png',
    caption: 'Crafting elegance from scratch — design in motion.',
    postUrl: 'https://www.instagram.com/reel/DTNkA24kpAY/',
    type: 'reel',
    embedPath: 'reel/DTNkA24kpAY',
  },
  {
    id: 3,
    image: '/assets/images/reel/reel3.png',
    caption: 'Every detail considered, every corner curated.',
    postUrl: 'https://www.instagram.com/reel/DSxkREmkgQk/',
    type: 'reel',
    embedPath: 'reel/DSxkREmkgQk',
  },
  // ── Static posts (Cloudinary) ───────────────────────────────────────────────
  {
    id: 4,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/arvind-villa-khatraj/nm-08573.jpg',
    caption: 'Arvind Villa, Khatraj — Where luxury meets restraint.',
    postUrl: PROFILE_URL,
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/venice-bungalows/01.jpg',
    caption: 'Venice Bungalows — Layered textures, timeless palette.',
    postUrl: PROFILE_URL,
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/parijaat-eclat-4bhk/nm-00007.jpg',
    caption: 'Parijaat Eclat 4BHK — Sculptural forms, warm tones.',
    postUrl: PROFILE_URL,
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/farmhouse-rancharda/nm-08673.jpg',
    caption: 'Rancharda Farmhouse — Earthy luxury, seamless outdoors.',
    postUrl: PROFILE_URL,
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/venice-bungalows/02.jpg',
    caption: 'Venice Bungalows — Natural light as a design tool.',
    postUrl: PROFILE_URL,
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/diojzujpv/image/upload/w_600,h_600,c_fill,g_auto/samay/event-office/nm-00076.jpg',
    caption: 'Event Office — Commercial interiors with character.',
    postUrl: PROFILE_URL,
  },
];
