import { NextResponse } from "next/server";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  // Burgers
  {
    id: "burger-1",
    name: "Classic Beef Burger",
    description:
      "Juicy beef patty with fresh lettuce, tomatoes, and our special sauce",
    price: 450,
    category: "Burgers",
    image: "/menu/burger-classic.jpg",
  },
  {
    id: "burger-2",
    name: "Chicken Zinger Burger",
    description: "Crispy fried chicken with spicy mayo and fresh vegetables",
    price: 420,
    category: "Burgers",
    image: "/menu/burger-zinger.jpg",
  },
  {
    id: "burger-3",
    name: "Double Decker Burger",
    description: "Two beef patties, double cheese, and all the fixings",
    price: 650,
    category: "Burgers",
    image: "/menu/burger-double.jpg",
  },
  {
    id: "burger-4",
    name: "Mushroom Swiss Burger",
    description: "Beef patty topped with sautéed mushrooms and Swiss cheese",
    price: 520,
    category: "Burgers",
    image: "/menu/burger-mushroom.jpg",
  },

  // Shawarmas
  {
    id: "shawarma-1",
    name: "Chicken Shawarma",
    description:
      "Tender marinated chicken wrapped in fresh naan with garlic sauce",
    price: 280,
    category: "Shawarmas",
    image: "/menu/shawarma-chicken.jpg",
  },
  {
    id: "shawarma-2",
    name: "Beef Shawarma",
    description:
      "Seasoned beef strips with tahini sauce and pickled vegetables",
    price: 320,
    category: "Shawarmas",
    image: "/menu/shawarma-beef.jpg",
  },
  {
    id: "shawarma-3",
    name: "Mix Shawarma",
    description: "Combination of chicken and beef with special sauce",
    price: 350,
    category: "Shawarmas",
    image: "/menu/shawarma-mix.jpg",
  },
  {
    id: "shawarma-4",
    name: "Falafel Shawarma",
    description: "Crispy falafel with hummus and fresh vegetables",
    price: 250,
    category: "Shawarmas",
    image: "/menu/shawarma-falafel.jpg",
  },

  // Pizzas
  {
    id: "pizza-1",
    name: "Margherita Pizza",
    description: "Classic tomato sauce, mozzarella, and fresh basil",
    price: 850,
    category: "Pizzas",
    image: "/menu/pizza-margherita.jpg",
  },
  {
    id: "pizza-2",
    name: "Pepperoni Pizza",
    description: "Loaded with pepperoni and extra cheese",
    price: 950,
    category: "Pizzas",
    image: "/menu/pizza-pepperoni.jpg",
  },
  {
    id: "pizza-3",
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken with BBQ sauce, onions, and bell peppers",
    price: 1050,
    category: "Pizzas",
    image: "/menu/pizza-bbq.jpg",
  },
  {
    id: "pizza-4",
    name: "Vegetarian Supreme",
    description: "Loaded with fresh vegetables and three types of cheese",
    price: 900,
    category: "Pizzas",
    image: "/menu/pizza-veggie.jpg",
  },

  // Deals
  {
    id: "deal-1",
    name: "Family Feast",
    description: "2 Large Pizzas, 1.5L Drink, and Garlic Bread",
    price: 2500,
    category: "Deals",
    image: "/menu/deal-family.jpg",
  },
  {
    id: "deal-2",
    name: "Burger Combo",
    description: "Any Burger, Fries, and Regular Drink",
    price: 650,
    category: "Deals",
    image: "/menu/deal-burger.jpg",
  },
  {
    id: "deal-3",
    name: "Shawarma Meal",
    description: "2 Shawarmas, Fries, and 2 Drinks",
    price: 850,
    category: "Deals",
    image: "/menu/deal-shawarma.jpg",
  },
  {
    id: "deal-4",
    name: "Student Special",
    description: "Small Pizza, Garlic Bread, and Regular Drink",
    price: 750,
    category: "Deals",
    image: "/menu/deal-student.jpg",
  },

  // Drinks
  {
    id: "drink-1",
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemon juice with mint",
    price: 150,
    category: "Drinks",
    image: "/menu/drink-lemonade.jpg",
  },
  {
    id: "drink-2",
    name: "Mango Smoothie",
    description: "Thick and creamy mango smoothie",
    price: 200,
    category: "Drinks",
    image: "/menu/drink-mango.jpg",
  },
  {
    id: "drink-3",
    name: "Cold Coffee",
    description: "Iced coffee with cream and chocolate drizzle",
    price: 250,
    category: "Drinks",
    image: "/menu/drink-coffee.jpg",
  },
  {
    id: "drink-4",
    name: "Soft Drinks",
    description: "Coke, Sprite, Fanta - Regular or Large",
    price: 100,
    category: "Drinks",
    image: "/menu/drink-soda.jpg",
  },

  // Sides
  {
    id: "side-1",
    name: "French Fries",
    description: "Crispy golden fries with ketchup",
    price: 180,
    category: "Sides",
    image: "/menu/side-fries.jpg",
  },
  {
    id: "side-2",
    name: "Loaded Fries",
    description: "Fries topped with cheese, jalapeños, and special sauce",
    price: 280,
    category: "Sides",
    image: "/menu/side-loaded-fries.jpg",
  },
  {
    id: "side-3",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs",
    price: 220,
    category: "Sides",
    image: "/menu/side-garlic-bread.jpg",
  },
  {
    id: "side-4",
    name: "Onion Rings",
    description: "Crispy battered onion rings with dipping sauce",
    price: 200,
    category: "Sides",
    image: "/menu/side-onion-rings.jpg",
  },
  {
    id: "side-5",
    name: "Chicken Wings",
    description: "Spicy buffalo wings with ranch dressing",
    price: 350,
    category: "Sides",
    image: "/menu/side-wings.jpg",
  },
  {
    id: "side-6",
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella with marinara sauce",
    price: 320,
    category: "Sides",
    image: "/menu/side-mozzarella.jpg",
  },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: menuItems,
    categories: [
      "All",
      "Burgers",
      "Shawarmas",
      "Pizzas",
      "Deals",
      "Drinks",
      "Sides",
    ],
  });
}
