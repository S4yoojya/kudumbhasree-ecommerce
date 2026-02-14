// Dummy data for Kudumbhasree ecommerce platform

// Sample sellers/members
export const sellers = [
  {
    id: 1,
    name: 'Asha Kumar',
    region: 'Kottayam',
    joinDate: '2023-01-15',
    profileImage: '👩‍🦰',
    description: 'Handmade textile artisan specializing in traditional Kerala designs'
  },
  {
    id: 2,
    name: 'Deepa Singh',
    region: 'Alappuzha',
    joinDate: '2023-03-20',
    profileImage: '👩‍🦱',
    description: 'Expert in organic food products and spice blends'
  },
  {
    id: 3,
    name: 'Mina Gupta',
    region: 'Kochi',
    joinDate: '2023-06-10',
    profileImage: '👩',
    description: 'Craft enthusiast creating unique handicrafts and home decor'
  },
  {
    id: 4,
    name: 'Priya Nair',
    region: 'Thrissur',
    joinDate: '2023-08-05',
    profileImage: '👩‍🦳',
    description: 'Textile designer and weaver with 10+ years experience'
  }
];

// Sample products
export const products = [
  {
    id: 1,
    sellerId: 1,
    name: 'Traditional Kerala Saree',
    category: 'Textiles',
    price: 2500,
    image: '🧥',
    description: 'Authentic handwoven saree with traditional kasavu patterns. Perfect for festivals and special occasions.',
    quantity: 5,
    rating: 4.5,
    reviews: 12,
    createdAt: '2024-01-10'
  },
  {
    id: 2,
    sellerId: 1,
    name: 'Embroidered Table Runner',
    category: 'Handicrafts',
    price: 800,
    image: '✨',
    description: 'Beautifully embroidered table runner with traditional motifs. Adds elegance to any dining setup.',
    quantity: 8,
    rating: 4.8,
    reviews: 24,
    createdAt: '2024-01-15'
  },
  {
    id: 3,
    sellerId: 2,
    name: 'Organic Turmeric Powder',
    category: 'Food',
    price: 350,
    image: '🌿',
    description: 'Pure organic turmeric powder from Kerala farms. No additives or preservatives. 500g pack.',
    quantity: 20,
    rating: 4.9,
    reviews: 45,
    createdAt: '2024-01-20'
  },
  {
    id: 4,
    sellerId: 2,
    name: 'Spice Blend Mix',
    category: 'Food',
    price: 450,
    image: '🌶️',
    description: 'Premium spice blend perfect for traditional Kerala curries. Contains turmeric, pepper, cinnamon and more.',
    quantity: 15,
    rating: 4.7,
    reviews: 31,
    createdAt: '2024-01-22'
  },
  {
    id: 5,
    sellerId: 3,
    name: 'Coconut Shell Bowl Set',
    category: 'Handicrafts',
    price: 600,
    image: '🥥',
    description: 'Handcrafted decorative bowls made from coconut shells. Set of 3 different sizes. Eco-friendly.',
    quantity: 10,
    rating: 4.6,
    reviews: 18,
    createdAt: '2024-01-25'
  },
  {
    id: 6,
    sellerId: 3,
    name: 'Jute Door Mat',
    category: 'Home Decor',
    price: 500,
    image: '🪴',
    description: 'Durable jute door mat with traditional patterns. Complements any home entrance. 60x40 cm.',
    quantity: 12,
    rating: 4.4,
    reviews: 15,
    createdAt: '2024-01-28'
  },
  {
    id: 7,
    sellerId: 4,
    name: 'Hand-woven Cushion Cover',
    category: 'Textiles',
    price: 350,
    image: '🪑',
    description: 'Beautiful hand-woven cushion cover in earthy tones. Perfect for traditional or modern interiors.',
    quantity: 18,
    rating: 4.7,
    reviews: 22,
    createdAt: '2024-02-01'
  },
  {
    id: 8,
    sellerId: 4,
    name: 'Silk Scarf',
    category: 'Textiles',
    price: 1200,
    image: '🧣',
    description: 'Premium silk scarf with hand-dyed colors. Ideal for all seasons. Lightweight and elegant.',
    quantity: 7,
    rating: 4.9,
    reviews: 38,
    createdAt: '2024-02-03'
  },
  {
    id: 9,
    sellerId: 1,
    name: 'Handmade Wall Hanging',
    category: 'Handicrafts',
    price: 950,
    image: '🎨',
    description: 'Intricate wall hanging with traditional Kerala designs. Adds cultural touch to your home.',
    quantity: 6,
    rating: 4.8,
    reviews: 28,
    createdAt: '2024-02-05'
  },
  {
    id: 10,
    sellerId: 2,
    name: 'Organic Coconut Oil',
    category: 'Food',
    price: 550,
    image: '🥥',
    description: 'Pure organic cold-pressed coconut oil. Perfect for cooking and skin care. 500ml bottle.',
    quantity: 25,
    rating: 4.8,
    reviews: 52,
    createdAt: '2024-02-08'
  },
  {
    id: 11,
    sellerId: 3,
    name: 'Bamboo Craft Pen Stand',
    category: 'Handicrafts',
    price: 400,
    image: '📝',
    description: 'Eco-friendly bamboo pen stand with carved designs. Great for desk organization.',
    quantity: 14,
    rating: 4.5,
    reviews: 11,
    createdAt: '2024-02-10'
  },
  {
    id: 12,
    sellerId: 4,
    name: 'Traditional Saree - Maroon',
    category: 'Textiles',
    price: 2800,
    image: '🧥',
    description: 'Elegant maroon saree with golden borders. Traditional weaving technique. Perfect for weddings.',
    quantity: 4,
    rating: 4.9,
    reviews: 35,
    createdAt: '2024-02-12'
  },
  {
    id: 13,
    sellerId: 1,
    name: 'Printed Cotton Fabric',
    category: 'Textiles',
    price: 200,
    image: '📋',
    description: '1 meter of printed cotton fabric with traditional motifs. Perfect for DIY projects.',
    quantity: 30,
    rating: 4.6,
    reviews: 14,
    createdAt: '2024-02-14'
  },
  {
    id: 14,
    sellerId: 2,
    name: 'Cardamom and Pepper Mix',
    category: 'Food',
    price: 480,
    image: '🫒',
    description: 'Premium spice mix with green cardamom and black pepper. Ideal for tea and cooking.',
    quantity: 16,
    rating: 4.7,
    reviews: 19,
    createdAt: '2024-02-13'
  },
  {
    id: 15,
    sellerId: 3,
    name: 'Wooden Jewelry Box',
    category: 'Handicrafts',
    price: 1100,
    image: '💍',
    description: 'Hand-carved wooden jewelry box with intricate patterns. Perfect for storing precious items.',
    quantity: 5,
    rating: 4.8,
    reviews: 26,
    createdAt: '2024-02-11'
  }
];

// Regional meetings
export const meetings = [
  {
    id: 1,
    region: 'Kottayam',
    title: 'Monthly Community Meet - Textiles Showcase',
    date: '2024-03-10',
    time: '10:00 AM',
    location: 'Kottayam Community Center',
    organizer: 'Asha Kumar',
    description: 'Monthly gathering for textile artisans to showcase products and network.',
    attendees: 12,
    maxCapacity: 30
  },
  {
    id: 2,
    region: 'Alappuzha',
    title: 'Food Product Training Workshop',
    date: '2024-03-15',
    time: '2:00 PM',
    location: 'Alappuzha Town Hall',
    organizer: 'Deepa Singh',
    description: 'Training on organic food product packaging and labeling standards.',
    attendees: 8,
    maxCapacity: 20
  },
  {
    id: 3,
    region: 'Kochi',
    title: 'Handicrafts Fair and Exhibition',
    date: '2024-03-20',
    time: '9:00 AM',
    location: 'Kochi Convention Center',
    organizer: 'Mina Gupta',
    description: 'Two-day fair showcasing all handicraft products from Kudumbhasree members.',
    attendees: 25,
    maxCapacity: 50
  },
  {
    id: 4,
    region: 'Thrissur',
    title: 'Weaving Techniques Discussion',
    date: '2024-03-25',
    time: '11:00 AM',
    location: 'Thrissur Crafts Center',
    organizer: 'Priya Nair',
    description: 'Session on modern and traditional weaving techniques. Open to all sellers.',
    attendees: 15,
    maxCapacity: 35
  },
  {
    id: 5,
    region: 'Kottayam',
    title: 'Online Sales Strategy Workshop',
    date: '2024-03-28',
    time: '3:00 PM',
    location: 'Kottayam Community Center',
    organizer: 'Asha Kumar',
    description: 'Learn effective strategies for selling products online and managing orders.',
    attendees: 18,
    maxCapacity: 30
  }
];

// User roles
export const USER_ROLES = {
  SELLER: 'seller',
  BUYER: 'buyer'
};

// Product categories
export const CATEGORIES = [
  'All Products',
  'Textiles',
  'Handicrafts',
  'Food',
  'Home Decor'
];

// Regions
export const REGIONS = [
  'Kottayam',
  'Alappuzha',
  'Kochi',
  'Thrissur'
];
