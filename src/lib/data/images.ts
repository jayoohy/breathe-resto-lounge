// Placeholder gallery sourced from Unsplash, curated to match Breathe's dark/gold visual identity.
// TODO(client): replace every entry below with high-res exports from the original Instagram/shoot files.
function unsplash(id: string, params = "auto=format&fit=crop&w=1600&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  heroBar: {
    src: unsplash("1572116469696-31de0f17cc34"),
    alt: "Warm, gold-lit lounge bar with hanging bulb fixtures and a full liquor shelf",
  },
  relaxNeon: {
    src: unsplash("1481833761820-0509d3217039"),
    alt: "\"Relax\" neon sign glowing in the window of a dim, cozy restaurant at night",
  },
  cozyDiner: {
    src: unsplash("1533777857889-4be7c70b33f7"),
    alt: "Guest enjoying a dish in a warmly lit, cozy restaurant booth",
  },
  barShelf: {
    src: unsplash("1514933651103-005eec06c04b"),
    alt: "Dark wood lounge bar counter backed by a fully stocked liquor shelf",
  },
  oldFashionedPour: {
    src: unsplash("1470337458703-46ad1756a187"),
    alt: "Bartender straining a whiskey cocktail with an orange twist over a large ice cube",
  },
  bulbBar: {
    src: unsplash("1543007630-9710e4a00a20"),
    alt: "Moody lounge bar with strings of warm hanging bulbs above the counter",
  },
  steakFries: {
    src: unsplash("1600891964092-4316c288032e"),
    alt: "Grilled steak plated with seasoned fries and fresh herbs",
  },
  finePlate: {
    src: unsplash("1414235077428-338989a2e8c0"),
    alt: "Elegant plated dish on a candlelit restaurant table set with wine glasses",
  },
  tacos: {
    src: unsplash("1615870216519-2f9fa575fa5c"),
    alt: "Loaded street tacos topped with a creamy sauce being poured over them",
  },
  ginTonic: {
    src: unsplash("1546171753-97d7676e4602"),
    alt: "Gin and tonic garnished with lime and mint, set against warm string lights",
  },
  strawberryCocktail: {
    src: unsplash("1497534446932-c925b458314e"),
    alt: "Bright red strawberry-mint cocktails garnished with lime",
  },
  groupToast: {
    src: unsplash("1592861956120-e524fc739696"),
    alt: "Friends gathered around a table, sharing food and raising a toast",
  },
  dessertPour: {
    src: unsplash("1551024506-0bccd828d307"),
    alt: "Caramel sauce being poured over a vanilla ice cream brownie dessert",
  },
  chefPrep: {
    src: unsplash("1551218808-94e220e084d2"),
    alt: "Chef finely chopping fresh herbs and vegetables for a dish",
  },
  goldDiningRoom: {
    src: unsplash("1517248135467-4c7edcad34c4"),
    alt: "Upscale dark and gold dining room interior with warm ambient lighting",
  },
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Food" | "Cocktails" | "Ambiance" | "Events";
};

export const galleryImages: GalleryImage[] = [
  { ...images.bulbBar, category: "Ambiance" },
  { ...images.oldFashionedPour, category: "Cocktails" },
  { ...images.steakFries, category: "Food" },
  { ...images.ginTonic, category: "Cocktails" },
  { ...images.groupToast, category: "Events" },
  { ...images.tacos, category: "Food" },
  { ...images.goldDiningRoom, category: "Ambiance" },
  { ...images.strawberryCocktail, category: "Cocktails" },
  { ...images.dessertPour, category: "Food" },
  { ...images.relaxNeon, category: "Ambiance" },
  { ...images.finePlate, category: "Food" },
  { ...images.chefPrep, category: "Events" },
];
