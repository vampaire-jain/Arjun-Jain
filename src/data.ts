import { Product, ValuePoint } from './types';
import dhoopImage from './assets/images/regenerated_image_1790071745955.png';
import agarbattiImage from './assets/images/regenerated_image_1790071748260.jpg';
import zipperImage from './assets/images/regenerated_image_1790071748975.png';
import heroShowcaseImage from './assets/images/regenerated_image_1790071751371.jpg';
import sambaraniCupImage from './assets/images/regenerated_image_1790229376181.jpg';
import wetDhoopImage from './assets/images/regenerated_image_1790229377086.jpg';
import thinStickImage from './assets/images/regenerated_image_1790229377777.jpg';

// 3 Inch Stick Fragrance Photography
import threeInchRoseImage from './assets/images/regenerated_image_1791549178129.webp';
import threeInchKachaBellaImage from './assets/images/regenerated_image_1791549178827.webp';
import threeInchLavenderImage from './assets/images/regenerated_image_1791549179610.webp';
import threeInchGameChangerImage from './assets/images/regenerated_image_1791549180411.jxl';
import threeInchSandalImage from './assets/images/regenerated_image_1791549181303.jxl';
import threeInchGulzarOudhImage from './assets/images/regenerated_image_1791549182208.jxl';
import threeInchKasturiImage from './assets/images/regenerated_image_1791549188037.webp';

// ============================================================================
// ============================================================================
//                       ADD YOUR PRODUCTS HERE
// ============================================================================
// ============================================================================
//
// How to add more products to the collection:
// 1. Copy an existing product object from the array below.
// 2. Paste it before the end of the `PRODUCTS` array.
// 3. Change `id` to a unique slug (e.g., 'divine-sandalwood-agarbatti').
// 4. Change `name` to your desired product name.
// 5. Change `category` to "Agarbatti", "Dhoop Batti", "sambarani cup", "Wet dhoop", or "thin stick in 4 inch".
// 6. Set `image` to your image path (e.g., "/assets/products/my-product.webp" or an imported file).
// 7. Add a concise `description` of the product.
// 8. Set `link` to the product URL or "#" to open the inquiry modal.
// 9. (Optional) Provide `tagline`, `idealFor`, and `ritualRole` for modal details.
//
// The product grid automatically updates its layout, count, and category filters!
// ============================================================================

export const PRODUCTS: Product[] = [
  {
    id: 'sambarani-cup',
    name: 'sambarani cup',
    category: 'sambarani cup',
    image: sambaraniCupImage,
    description: 'BIG BELL Kacha Chandan Sambrani Dhoop Cup. Pure Devotion in Every Cup with authentic natural resins and sandalwood powder.',
    link: '#',
    tagline: 'Pure Devotion in Every Cup',
    idealFor: ['Morning Aarti & Hawan', 'House Sanctification', 'Removing Negative Energy'],
    ritualRole: 'Traditional charcoal cup filled with potent sambrani and chandan emitting dense holy smoke.',
  },
  {
    id: 'wet-dhoop',
    name: 'Wet dhoop',
    category: 'Wet dhoop',
    image: wetDhoopImage,
    description: 'Garima Guggal Premium Wet Dhoop. Soft fragrant wet dhoop bar and cone crafted with pure guggul resin for long-lasting aroma.',
    link: '#',
    tagline: 'Natural Moist Resin Cake',
    idealFor: ['Deep Evening Pooja', 'Meditation Spaces', 'Tranquil Ambience'],
    ritualRole: 'Rich moist aromatic formulation that burns gently with prolonged soothing sacred fragrance.',
  },
  {
    id: 'thin-stick-in-4-inch',
    name: 'thin stick in 4 inch',
    category: 'thin stick in 4 inch',
    image: thinStickImage,
    description: 'Kacha Guggal 4 Inch Slender Dhoop Sticks. Compact burning dhoop sticks designed for quick daily prayer and prolonged aroma.',
    link: '#',
    tagline: 'Slender 4-Inch Devotional Sticks',
    idealFor: ['Daily Mandir Rituals', 'Workplace Puja', 'Compact Burners'],
    ritualRole: 'Precision 4-inch slender dhoop stick offering even, clean burn without harsh bamboo core.',
  },
  {
    id: 'divine-dhoop-batti',
    name: 'Divine Dhoop Batti',
    category: 'Dhoop Batti',
    image: dhoopImage,
    description: 'Rich, comforting fragrance for peaceful spaces and meaningful moments of prayer.',
    link: '#',
    tagline: 'Deep, Grounding Essence',
    idealFor: ['Morning Aarti & Puja', 'Deep Meditation', 'Purifying Living Spaces'],
    ritualRole: 'Dense, soothing smoke releasing traditional sacred notes.',
  },
  {
    id: 'divine-agarbatti',
    name: 'Divine Agarbatti',
    category: 'Agarbatti',
    image: agarbattiImage,
    description: 'Elegant incense fragrance for prayer, meditation, and everyday ambience.',
    link: '#',
    tagline: 'Slender, Harmonious Aroma',
    idealFor: ['Daily Prayers', 'Evening Relaxation', 'Welcoming Atmosphere'],
    ritualRole: 'Gentle, continuous fragrant burn that clears the aura.',
  },
  {
    id: 'divine-zipper-pack',
    name: 'Divine Zipper Pack',
    category: 'Agarbatti',
    image: zipperImage,
    description: 'Freshness-preserving zipper pouch designed to retain rich fragrance and aroma.',
    link: '#',
    tagline: 'Aroma-Sealed Convenience',
    idealFor: ['Extended Devotional Practice', 'Travel & Gifting', 'Long-lasting Freshness'],
    ritualRole: 'Air-tight resealable closure keeping incense potent.',
  },
  {
    id: 'divine-devotional-dhoop',
    name: 'Divine Heritage Dhoop Batti',
    category: 'Dhoop Batti',
    image: heroShowcaseImage,
    description: 'Traditional incense formulation creating tranquil devotional ambience.',
    link: '#',
    tagline: 'Sacred Temple Fragrance',
    idealFor: ['Festival Ceremonies', 'Mindful Focus', 'Sanctuary Spaces'],
    ritualRole: 'Rich traditional aroma crafted for solemn prayer.',
  },
  // ==========================================================================
  // 3 INCH STICK COLLECTION (7 Signature Fragrances)
  // ==========================================================================
  {
    id: '3-inch-rose',
    name: 'Rose',
    category: '3 inch stick',
    image: threeInchRoseImage,
    description: '3 Inch Slender Dhoop Stick — Rose. Exquisite velvety Damask rose essence distilled for morning aarti and welcoming devotional aura.',
    link: '#',
    tagline: 'Pure Damask Rose Essence',
    idealFor: ['Morning Aarti & Pooja', 'Welcoming Living Rooms', 'Devotional Gratitude'],
    ritualRole: 'Compact 3-inch bamboo-less dhoop stick releasing lush soothing floral notes.',
  },
  {
    id: '3-inch-kacha-bella',
    name: 'Kacha bella',
    category: '3 inch stick',
    image: threeInchKachaBellaImage,
    description: '3 Inch Slender Dhoop Stick — Kacha bella. Fresh, crisp raw Jasmine and Mogra blossom notes bringing invigorating temple purity.',
    link: '#',
    tagline: 'Fresh Jasmine & Mogra Nectar',
    idealFor: ['Daily Mandir Prayers', 'Mindful Awakening', 'Purifying Living Spaces'],
    ritualRole: 'Clean 3-inch stick releasing crisp botanical floral sweetness without soot.',
  },
  {
    id: '3-inch-lavender',
    name: 'Lavender',
    category: '3 inch stick',
    image: threeInchLavenderImage,
    description: '3 Inch Slender Dhoop Stick — Lavender. Calming herbal-floral aroma formulated for mindful meditation, relaxation, and serene evenings.',
    link: '#',
    tagline: 'Serene Twilight Blossom',
    idealFor: ['Evening Unwinding', 'Meditation & Breathwork', 'Peaceful Sleep Sanctuary'],
    ritualRole: 'Gentle, tranquil herbal aroma harmonizing the home atmosphere.',
  },
  {
    id: '3-inch-game-changer',
    name: 'Game changer',
    category: '3 inch stick',
    image: threeInchGameChangerImage,
    description: '3 Inch Slender Dhoop Stick — Game changer. A bold signature fusion of royal amber, oriental woods, and exotic spice notes.',
    link: '#',
    tagline: 'Bold Signature Royal Blend',
    idealFor: ['Special Gatherings', 'Elevated Ambiance', 'Focus & Inspiration'],
    ritualRole: 'Prestigious aroma profile that captivates and transforms modern interiors.',
  },
  {
    id: '3-inch-sandal',
    name: 'sandal',
    category: '3 inch stick',
    image: threeInchSandalImage,
    description: '3 Inch Slender Dhoop Stick — Sandal. Sacred Mysore sandalwood formulation releasing timeless warm woody notes for solemn prayers.',
    link: '#',
    tagline: 'Pure Mysore Chandan Heritage',
    idealFor: ['Temple Rituals & Havan', 'Deep Contemplation', 'Sacred Focus'],
    ritualRole: 'Grounding traditional chandan stick clearing negative energies.',
  },
  {
    id: '3-inch-gulzar-oudh',
    name: 'Gulzar oudh',
    category: '3 inch stick',
    image: threeInchGulzarOudhImage,
    description: '3 Inch Slender Dhoop Stick — Gulzar oudh. Rich opulent oudh infused with blooming floral undertones for elevated spiritual spaces.',
    link: '#',
    tagline: 'Royal Agarwood & Floral Bloom',
    idealFor: ['Solemn Celebrations', 'Luxury Living Spaces', 'Evening Rejuvenation'],
    ritualRole: 'Deep woody agarwood warmth balanced with delicate floral nectar.',
  },
  {
    id: '3-inch-kasturi',
    name: 'Kasturi',
    category: '3 inch stick',
    image: threeInchKasturiImage,
    description: '3 Inch Slender Dhoop Stick — Kasturi. Mystical musk incense inspired by ancient temple traditions, evoking contemplative devotion.',
    link: '#',
    tagline: 'Sacred Musk & Temple Notes',
    idealFor: ['Dhyana & Chanting', 'Aura Cleansing', 'Extended Pooja'],
    ritualRole: 'Mystical aromatic musk evoking the sanctum of historic Vedic shrines.',
  },
];

export const VALUE_POINTS: ValuePoint[] = [
  {
    id: 'moment',
    title: 'A Fragrance for Every Moment',
    description: 'Thoughtfully created to complement personal prayer, quiet meditation, reading, and gentle evening reflection.',
    iconName: 'Sparkles',
  },
  {
    id: 'care',
    title: 'Crafted With Care',
    description: 'Balanced fragrances celebrating traditional spiritual aesthetics while fitting effortlessly into modern homes.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'rituals',
    title: 'Designed for Everyday Rituals',
    description: 'An effortless companion to daily devotional practices and mindful rituals that center your heart and mind.',
    iconName: 'SunMedium',
  },
  {
    id: 'experience',
    title: 'A Peaceful Experience',
    description: 'Smooth, subtle notes designed to create a calm, welcoming ambience without overwhelming your living space.',
    iconName: 'Wind',
  },
];

export const BRAND_DETAILS = {
  brandName: 'Divine Fragrance',
  subBrand: 'Divine fragrance',
  tagline: 'The Luxury Of Pure Fragrance.',
  eyebrow: 'DIVINE FRAGRANCE',
  fixedHeading: 'Choose your',
  supportingText: 'Bring fragrance, warmth and peaceful moments into your everyday space.',
  primaryCTA: 'Explore Products',
  secondaryCTA: 'Discover Divine',
  introHeading: 'Fragrance That Creates a Moment.',
  introText:
    'Divine Fragrance focuses on incense products designed to bring fragrance and a peaceful atmosphere into everyday spaces. Created for those who cherish mindful living, our collection honours sacred traditions while offering refined sensory balance for modern homes.',
  experienceHeading: 'Let the Fragrance Set the Mood.',
  closingHeading: 'Make Every Moment More Meaningful.',
  closingText:
    'Explore Divine Fragrance Dhoop Batti, Agarbatti, and 3 Inch Sticks and discover fragrances made for moments of peace and reflection.',
};
