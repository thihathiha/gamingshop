export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5',
    category: 'Console',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion with haptic feedback.',
    price: '$499.99',
    image: 'https://images.unsplash.com/photo-1606813907291-d86ebb9c74ad?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Xbox Series X',
    category: 'Console',
    description: 'The fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles.',
    price: '$499.99',
    image: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Nintendo Switch OLED',
    category: 'Handheld',
    description: 'Features a vibrant 7-inch OLED screen, a wide adjustable stand, and a wired LAN port.',
    price: '$349.99',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'PlayStation DualSense',
    category: 'Accessory',
    description: 'Discover a deeper, highly immersive gaming experience with the innovative PS5 controller.',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Xbox Wireless Controller',
    category: 'Accessory',
    description: 'Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces.',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1605898960710-94e0952282ff?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Nintendo Switch Pro Controller',
    category: 'Accessory',
    description: 'Take your game sessions up a notch with the Nintendo Switch Pro Controller.',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1600080972464-8e5f3580243a?auto=format&fit=crop&q=80&w=800',
  },
];
