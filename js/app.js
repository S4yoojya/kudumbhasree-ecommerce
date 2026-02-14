// Main application logic for Kudumbhasree ecommerce platform

import { products, sellers, meetings, USER_ROLES, CATEGORIES, REGIONS } from './data.js';

// Application state
export const appState = {
  currentUser: null,
  currentPage: 'login',
  userCart: [],
  userOrders: [],
  heartedProducts: [],
  userMeetings: []
};

// Initialize the app
export function initApp() {
  // Check if user is logged in
  const savedUser = localStorage.getItem('kudumbhasreeUser');
  if (savedUser) {
    appState.currentUser = JSON.parse(savedUser);
    navigateToPage('home');
  } else {
    navigateToPage('login');
  }
}

// Navigate between pages
export function navigateToPage(pageName) {
  appState.currentPage = pageName;
  
  // Hide all pages
  const pages = document.querySelectorAll('[data-page]');
  pages.forEach(page => page.style.display = 'none');
  
  // Show selected page
  const selectedPage = document.querySelector(`[data-page="${pageName}"]`);
  if (selectedPage) {
    selectedPage.style.display = 'block';
    
    // Call page-specific initialization
    if (window[`init${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page`]) {
      window[`init${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page`]();
    }
  }
  
  // Update navigation active state
  updateNavigationState();
}

// Update navigation active state
export function updateNavigationState() {
  const navLinks = document.querySelectorAll('[data-nav]');
  navLinks.forEach(link => link.classList.remove('active'));
  
  const activeLink = document.querySelector(`[data-nav="${appState.currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// User authentication
export function loginUser(email, password, role) {
  // For demo purposes, create a user object
  const user = {
    id: Math.random().toString(36).substr(2, 9),
    email: email,
    name: email.split('@')[0],
    role: role,
    createdAt: new Date().toISOString()
  };
  
  if (role === USER_ROLES.SELLER) {
    user.products = [];
    user.meetings = [];
    user.region = 'Not Set';
  }
  
  appState.currentUser = user;
  localStorage.setItem('kudumbhasreeUser', JSON.stringify(user));
  return user;
}

export function signupUser(email, password, role, name, region) {
  const user = {
    id: Math.random().toString(36).substr(2, 9),
    email: email,
    name: name || email.split('@')[0],
    role: role,
    createdAt: new Date().toISOString()
  };
  
  if (role === USER_ROLES.SELLER) {
    user.region = region || 'Not Set';
    user.products = [];
    user.meetings = [];
  }
  
  appState.currentUser = user;
  localStorage.setItem('kudumbhasreeUser', JSON.stringify(user));
  return user;
}

export function logoutUser() {
  appState.currentUser = null;
  appState.userCart = [];
  localStorage.removeItem('kudumbhasreeUser');
  navigateToPage('login');
}

// Product management functions
export function getSellerProducts(sellerId) {
  return products.filter(p => p.sellerId === sellerId);
}

export function getProductById(productId) {
  return products.find(p => p.id === productId);
}

export function getSellerById(sellerId) {
  return sellers.find(s => s.id === sellerId);
}

export function addProduct(product) {
  const newProduct = {
    ...product,
    id: Math.max(...products.map(p => p.id), 0) + 1,
    createdAt: new Date().toISOString(),
    sellerId: appState.currentUser.id,
    rating: 5,
    reviews: 0
  };
  products.push(newProduct);
  return newProduct;
}

export function updateProduct(productId, updates) {
  const product = getProductById(productId);
  if (product) {
    Object.assign(product, updates);
    return product;
  }
  return null;
}

export function deleteProduct(productId) {
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
}

// Search and filter functions
export function searchProducts(query) {
  return products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterProductsByCategory(category) {
  if (category === 'All Products') {
    return products;
  }
  return products.filter(p => p.category === category);
}

export function filterProductsByRegion(region) {
  return products.filter(p => {
    const seller = getSellerById(p.sellerId);
    return seller && seller.region === region;
  });
}

// Cart functions
export function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return false;
  
  const existingItem = appState.userCart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    appState.userCart.push({
      ...product,
      quantity: quantity,
      cartItemId: Math.random().toString(36).substr(2, 9)
    });
  }
  
  saveCartToStorage();
  return true;
}

export function removeFromCart(cartItemId) {
  const index = appState.userCart.findIndex(item => item.cartItemId === cartItemId);
  if (index !== -1) {
    appState.userCart.splice(index, 1);
    saveCartToStorage();
    return true;
  }
  return false;
}

export function updateCartQuantity(cartItemId, quantity) {
  const item = appState.userCart.find(item => item.cartItemId === cartItemId);
  if (item && quantity > 0) {
    item.quantity = quantity;
    saveCartToStorage();
    return true;
  }
  return false;
}

export function getCartTotal() {
  return appState.userCart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export function saveCartToStorage() {
  localStorage.setItem('kudumbhasreeCart', JSON.stringify(appState.userCart));
}

export function loadCartFromStorage() {
  const savedCart = localStorage.getItem('kudumbhasreeCart');
  if (savedCart) {
    appState.userCart = JSON.parse(savedCart);
  }
}

export function clearCart() {
  appState.userCart = [];
  localStorage.removeItem('kudumbhasreeCart');
}

// Favorites/Hearts functions
export function toggleHeart(productId) {
  const index = appState.heartedProducts.indexOf(productId);
  if (index !== -1) {
    appState.heartedProducts.splice(index, 1);
  } else {
    appState.heartedProducts.push(productId);
  }
  saveHeartsToStorage();
}

export function isHeartedProduct(productId) {
  return appState.heartedProducts.includes(productId);
}

export function saveHeartsToStorage() {
  localStorage.setItem('kudumbhasreeHearts', JSON.stringify(appState.heartedProducts));
}

export function loadHeartsFromStorage() {
  const savedHearts = localStorage.getItem('kudumbhasreeHearts');
  if (savedHearts) {
    appState.heartedProducts = JSON.parse(savedHearts);
  }
}

// Regional meetings functions
export function getMeetingsByRegion(region) {
  return meetings.filter(m => m.region === region);
}

export function getAllMeetings() {
  return meetings;
}

export function addMeeting(meeting) {
  const newMeeting = {
    ...meeting,
    id: Math.max(...meetings.map(m => m.id), 0) + 1,
    attendees: 1,
    maxCapacity: meeting.maxCapacity || 30
  };
  meetings.push(newMeeting);
  return newMeeting;
}

export function registerForMeeting(meetingId) {
  const meeting = meetings.find(m => m.id === meetingId);
  if (meeting && meeting.attendees < meeting.maxCapacity) {
    meeting.attendees += 1;
    appState.userMeetings.push(meetingId);
    saveMeetingsToStorage();
    return true;
  }
  return false;
}

export function saveMeetingsToStorage() {
  localStorage.setItem('kudumbhasrreeMeetings', JSON.stringify(appState.userMeetings));
}

export function loadMeetingsFromStorage() {
  const savedMeetings = localStorage.getItem('kudumbhasrreeMeetings');
  if (savedMeetings) {
    appState.userMeetings = JSON.parse(savedMeetings);
  }
}

// Order functions
export function createOrder() {
  if (appState.userCart.length === 0) return false;
  
  const order = {
    id: `ORD-${Date.now()}`,
    items: [...appState.userCart],
    total: getCartTotal(),
    date: new Date().toISOString(),
    buyer: appState.currentUser.email,
    status: 'Confirmed'
  };
  
  appState.userOrders.push(order);
  saveOrdersToStorage();
  clearCart();
  return order;
}

export function saveOrdersToStorage() {
  localStorage.setItem('kudumbhasreeOrders', JSON.stringify(appState.userOrders));
}

export function loadOrdersFromStorage() {
  const savedOrders = localStorage.getItem('kudumbhasreeOrders');
  if (savedOrders) {
    appState.userOrders = JSON.parse(savedOrders);
  }
}

// Load all data from storage on app start
export function loadAppData() {
  loadCartFromStorage();
  loadHeartsFromStorage();
  loadMeetingsFromStorage();
  loadOrdersFromStorage();
}

// Format price in Indian Rupees
export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(price);
}

// Format date
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
