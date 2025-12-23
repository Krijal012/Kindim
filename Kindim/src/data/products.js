const categoryProducts = {
  "Beauty Products": [
    "Shampoo", "Conditioner", "Face Wash", "Lipstick", "Foundation", "Perfume", "Lotion", "Moisturizer", "Face Mask", "Body Scrub"
  ],
  "Clothing": [
    "T-Shirt", "Jeans", "Hoodie", "Jacket", "Sneakers", "Hat", "Dress", "Skirt", "Socks", "Sweater"
  ],
  "Decorations": [
    "Wall Painting", "Table Lamp", "Ceramic Vase", "Scented Candle", "Indoor Plant", "Wall Clock", "Decorative Light", "Photo Frame", "Curtains", "Rug"
  ],
  "Electronics": [
    "Laptop", "Smartphone", "Headphones", "Smart Watch", "Camera", "Speaker", "Mouse", "Keyboard", "TV", "Tablet"
  ],
  "Music": [
    "Guitar", "Piano", "Violin", "Ukulele", "Drum Pad", "Microphone", "Flute", "DJ Equipment", "Vinyl Record", "Amplifier"
  ],
};

const products = [];
let idCounter = 1;

const categories = Object.keys(categoryProducts);

categories.forEach((category) => {
  for (let i = 0; i < 100; i++) {
    const productName = categoryProducts[category][i % categoryProducts[category].length]; // cycle through names
    const price = Math.floor(Math.random() * 10000) + 100;
    const rating = Number((Math.random() * 1.5 + 3.5).toFixed(1));
    const image = `https://via.placeholder.com/300x300?text=${encodeURIComponent(productName)}`;

    products.push({
      id: idCounter++,
      name: productName,
      price,
      rating,
      category,
      image,
    });
  }
});

export default products;
