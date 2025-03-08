// src/data/pizzas.js
export const pizzas = [
  {
    id: 1,
    name: 'Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
  },
  {
    id: 2,
    name: 'Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
  },
  {
    id: 3,
    name: 'Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
  },
];

// Placeholder for cart data
export let pizzaCart = [];

// Function to add to cart
export const addToCart = (pizza, quantity = 1) => {
  const existingPizza = pizzaCart.find(item => item.id === pizza.id);
  
  if (existingPizza) {
    // If pizza already in cart, increase quantity
    pizzaCart = pizzaCart.map(item => 
      item.id === pizza.id 
        ? { ...item, quantity: item.quantity + quantity } 
        : item
    );
  } else {
    // Add new pizza to cart
    pizzaCart = [...pizzaCart, { ...pizza, quantity }];
  }
  
  return pizzaCart;
};

// Function to update cart item quantity
export const updateCartItem = (id, quantity) => {
  pizzaCart = pizzaCart.map(item => 
    item.id === id ? { ...item, quantity } : item
  );
  
  // Remove item if quantity is zero or less
  pizzaCart = pizzaCart.filter(item => item.quantity > 0);
  
  return pizzaCart;
};

// Function to clear cart
export const clearCart = () => {
  pizzaCart = [];
  return pizzaCart;
};