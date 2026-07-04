// TODO(client): sample menu — replace items & prices with the real MENU/DISHES/TACOS/COCKTAIL highlight content.
export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "dishes",
    title: "Dishes",
    subtitle: "Small plates & starters",
    items: [
      {
        name: "Peppered Snails",
        description: "Bush snails tossed in a fiery pepper sauce, bell peppers, and onions",
        price: "₦12,000",
      },
      {
        name: "Suya Skewers",
        description: "Char-grilled beef skewers dusted in suya spice, sliced onions & tomato",
        price: "₦9,500",
      },
      {
        name: "Grilled Foil Fish",
        description: "Whole fish grilled in foil with cucumber, peppers, and native spice",
        price: "₦15,000",
      },
      {
        name: "Small Chops Platter",
        description: "Spring rolls, samosa, puff-puff & fish rolls with dipping sauce",
        price: "₦11,000",
      },
    ],
  },
  {
    id: "tacos",
    title: "Tacos",
    subtitle: "Breathe's take on the street classic",
    items: [
      {
        name: "Shredded Beef Tacos",
        description: "Slow-braised beef, pico de gallo, chipotle crema, cotija cheese",
        price: "₦8,500",
      },
      {
        name: "Grilled Chicken Tacos",
        description: "Citrus-marinated chicken, cabbage slaw, lime crema",
        price: "₦8,000",
      },
      {
        name: "Prawn Tacos",
        description: "Chargrilled prawns, avocado, mango salsa, chili crema",
        price: "₦10,500",
      },
    ],
  },
  {
    id: "mains",
    title: "Local & Intercontinental Mains",
    subtitle: "Delectable local & intercontinental dishes",
    items: [
      {
        name: "Nkwobi",
        description: "Spiced cow foot in traditional palm oil sauce, utazi leaf",
        price: "₦13,500",
      },
      {
        name: "Native Jollof & Grilled Chicken",
        description: "Smoky party jollof rice with a quarter grilled chicken",
        price: "₦12,500",
      },
      {
        name: "Seafood Okra",
        description: "Okra soup loaded with prawns, fish & assorted meat, served with swallow",
        price: "₦16,000",
      },
      {
        name: "Grilled Ribeye Steak",
        description: "10oz ribeye, herb butter, sautéed vegetables, garlic mash",
        price: "₦22,000",
      },
      {
        name: "Alfredo Pasta with Grilled Chicken",
        description: "Creamy alfredo, parmesan, garlic bread",
        price: "₦11,500",
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    subtitle: "From The Bar / Mixology program",
    items: [
      {
        name: "Breathe Signature",
        description: "House gin, blue curaçao, fresh lime, orange twist",
        price: "₦7,500",
      },
      {
        name: "Whiskey Sour",
        description: "Bourbon, fresh lemon, egg white, angostura bitters",
        price: "₦7,000",
      },
      {
        name: "Espresso Martini",
        description: "Vodka, coffee liqueur, fresh espresso, cream top",
        price: "₦8,000",
      },
      {
        name: "Tropical Iced Tea",
        description: "Dark rum, hibiscus, passionfruit, iced long pour",
        price: "₦6,500",
      },
    ],
  },
];
