// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Orders",
    url: "/orders",
  },
  {
    title: "Shop",
    url: "/products",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Sell",
    url: "/seller",
  },
];

// branding data
export const brandingData = [
  {
    id: 1,
    title: "Free Collection",
    Description: "At the university",
    icon: "box.png",
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    Description: "Save up to 25% off",
    icon: "suprise.png",
  },
  {
    id: 4,
    title: "Affordable Prices",
    Description: "Get preloved and new items at an affordable price",
    icon: "save-money.png",
  },
  {
    id: 5,
    title: "Secure Payments",
    Description: "100% protected payments",
    icon: "securepayments.png",
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Men",
    subTitle: "",
    image_Url: "male.png",
  },
  {
    id: 2,
    title: "Women",
    subTitle: "",
    image_Url: "female.png",
  },
  {
    id: 3,
    title: "Kids",
    subTitle: "",
    image_Url: "kids.png",
  },
  {
    id: 4,
    title: "Clothing",
    subTitle: "",
    image_Url: "clothing.png",
  },
  {
    id: 5,
    title: "Books and Magazines",
    subTitle: "",
    image_Url: "book.png",
  },
  {
    id: 6,
    title: "Footwear",
    subTitle: "",
    image_Url: "shoe.png",
  },
  {
    id: 7,
    title: "Pets",
    subTitle: "",
    image_Url: "pets.png",
  },
  {
    id: 8,
    title: "Electronics",
    subTitle: "",
    image_Url: "electronics.png",
  },
  {
    id: 9,
    title: "Music & Gaming",
    subTitle: "",
    image_Url: "gaming.png",
  },
  {
    id: 10,
    title: "Home",
    subTitle: "",
    image_Url: "home.png",
  },
  {
    id: 11,
    title: "Sport",
    subTitle: "",
    image_Url: "sport.png",
  },
  {
    id: 12,
    title: "Services",
    subTitle: "",
    image_Url: "service.png",
  },
  {
    id: 13,
    title: "Accesories",
    subTitle: "",
    image_Url: "accessories.png",
  },
  {
    id: 14,
    title: "Beauty",
    subTitle: "",
    image_Url: "cosmetics.png",
  },
  {
    id: 15,
    title: "Other",
    subTitle: "",
    image_Url: "art.png",
  },
];

// product Data
export const productData = [
  {
    id: 289289211,
    category: "Computers and Laptops",
    name: "Dell Laptop",
    description:
      "Black dell laptop. Still in great condition. Reason for selling: Got an upgrade.",
    image_Url: [
      {
        public_id: "test",
        url: ["dell-laptop.jpeg"],
      },
      {
        public_id: "test",
        url: "dell-laptop.jpeg",
      },
    ],
    shop: {
      name: "Mark Heisenberg",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 3200,
    discount_price: 0,
    rating: 4,
    total_sell: 30,
    stock: 1,
  },
  {
    id: 29198292,
    category: "Home",
    name: "Dining table and 4 chairs",
    description:
      "Selling this modern dining table and 4 chairs. They are very well taken care of.",
    image_Url: [
      {
        public_id: "test",
        url: ["dining.jpeg"],
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Smangaliso",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 0,
    price: 2400,
    rating: 5,
    total_sell: 80,
    stock: 10,
  },
  {
    id: 18228,
    category: "Footwear",
    name: "Adidas Samba UK 6",
    description:
      "Used Like New. Only worn once, but they couldn't fit. I didn't have enough time to return them.",
    image_Url: [
      {
        public_id: "test",
        url: ["samba.jpeg", "samba-2.jpeg"],
      },
      {
        public_id: "test",
        url: "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png",
      },
    ],
    shop: {
      name: "Jamie-Lee van der Merwe",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1400,
    discount_price: 0,
    rating: 4,
    total_sell: 75,
    stock: 10,
  },
  {
    id: 4,
    category: "Gaming & Music",
    name: "PS5",
    description:
      "Selling my boyfriend's PS5. It was just collecting dust in the bedroom. Still in amazing condition.",
    image_Url: [
      {
        public_id: "test",
        url: ["ps5.jpeg"],
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Zaakira",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
      category: "Others",
    },
    price: 10500,
    discount_price: 0,
    rating: 4,
    total_sell: 77,
    stock: 10,
  },
  {
    id: 73825,
    category: "Other",
    name: "Fynbos Lifestyle Estate 1 bed apartment.",
    description:
      "Selling our family home. It's in a nice, secure, security esate in Parklands. There's a life style center, restaurant, and a lovely park.",
    image_Url: [
      {
        public_id: "test",
        url: ["apartment.jpeg"],
      },
      {
        public_id: "test",
        url: "https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/RLV0015/2-800x800.jpg",
      },
    ],
    shop: {
      name: "Thato Buthelezi",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 1500000,
    discount_price: 0,
    rating: 5,
    total_sell: 49,
    stock: 10,
  },
  {
    id: 92209201,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: ["dell-laptop.jpeg"],
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
    category: "Music and Gaming",
  },
  {
    id: 829124,
    name: "Selling my old Nike shoes Uk 6",
    category: "Footwear",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: ["nike.jpeg"],
      },
      {
        public_id: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Cariena du Toit",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 350,
    discount_price: 0,
    rating: 4,
    total_sell: 62,
    stock: 10,
  },
  {
    id: 109198,
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: ["nike.jpeg"],
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
  {
    id: 21232,
    category: "Mobile and Tablets",
    name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: ["nike.jpeg"],
      },
      {
        public_id: "test",
        url: "https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    discount_price: 1099,
    rating: 5,
    total_sell: 20,
    stock: 10,
  },
  {
    id: 9191,
    category: "Music and Gaming",
    name: "Gaming Headphone Asus with mutiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    image_Url: [
      {
        public_id: "test",
        url: ["nike.jpeg"],
      },
      {
        public_id: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shop_avatar: {
        public_id: "test",
        url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
      },
      ratings: 4.2,
    },
    price: 300,
    discount_price: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "IT's so cool!",
        rating: 5,
      },
    ],
    total_sell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Careers",
    link: "/carrers",
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "Our Blog",
  },
  {
    name: "Reviews",
  },
];

export const footercompanyLinks = [
  {
    name: "Game & Video",
  },
  {
    name: "Phone &Tablets",
  },
  {
    name: "Computers & Laptop",
  },
  {
    name: "Sport Watches",
  },
  {
    name: "Events",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
  },
  {
    name: "Reviews",
  },
  {
    name: "Contact Us",
  },
  {
    name: "Shipping",
  },
  {
    name: "Live chat",
  },
];
