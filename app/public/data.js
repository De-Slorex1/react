export const dishes = {
  culinary_dishes: [
    {
      dish_id: "DISH-001",
      name: "Margherita Pizza",
      cuisine: "Italian",
      category: "Main Course",
      description: "A delicious and authentic italian inspired margherita pizza prepared fresh by our chefs using premium ingredients.",
      price: 13.24,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 405,
        protein_g: 15,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "./samosa.jgp",
        thumbnail: "https://images.example.com/dishes/thumbs/margherita-pizza_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-002",
      name: "Pepperoni Pizza",
      cuisine: "Italian",
      category: "Main Course",
      description: "A delicious and authentic italian inspired pepperoni pizza prepared fresh by our chefs using premium ingredients.",
      price: 16.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 610,
        protein_g: 25,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "./pizza.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/pepperoni-pizza_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-003",
      name: "Fettuccine Alfredo",
      cuisine: "Italian",
      category: "Main Course",
      description: "A delicious and authentic italian inspired fettuccine alfredo prepared fresh by our chefs using premium ingredients.",
      price: 17.49,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 560,
        protein_g: 35,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
         full_size: "./pizza.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/fettuccine-alfredo_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-004",
      name: "Lasagna Bolognese",
      cuisine: "Italian",
      category: "Main Course",
      description: "A delicious and authentic italian inspired lasagna bolognese prepared fresh by our chefs using premium ingredients.",
      price: 20.74,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 765,
        protein_g: 5,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "./samosa.jgp",
        thumbnail: "https://images.example.com/dishes/thumbs/lasagna-bolognese_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-005",
      name: "Tiramisu",
      cuisine: "Italian",
      category: "Dessert",
      description: "A delicious and authentic italian inspired tiramisu prepared fresh by our chefs using premium ingredients.",
      price: 23.99,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 370,
        protein_g: 15,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "./samosa.jgp",
        thumbnail: "https://images.example.com/dishes/thumbs/tiramisu_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-006",
      name: "Caprese Salad",
      cuisine: "Italian",
      category: "Appetizer",
      description: "A delicious and authentic italian inspired caprese salad prepared fresh by our chefs using premium ingredients.",
      price: 24.99,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 320,
        protein_g: 25,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "./pizza.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/caprese-salad_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-007",
      name: "Sushi Combo Platter",
      cuisine: "Japanese",
      category: "Main Course",
      description: "A delicious and authentic japanese inspired sushi combo platter prepared fresh by our chefs using premium ingredients.",
      price: 10.74,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 525,
        protein_g: 35,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/sushi-combo-platter.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/sushi-combo-platter_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-008",
      name: "Tonkotsu Ramen",
      cuisine: "Japanese",
      category: "Main Course",
      description: "A delicious and authentic japanese inspired tonkotsu ramen prepared fresh by our chefs using premium ingredients.",
      price: 13.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 730,
        protein_g: 5,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/tonkotsu-ramen.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/tonkotsu-ramen_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-009",
      name: "Shrimp Tempura",
      cuisine: "Japanese",
      category: "Appetizer",
      description: "A delicious and authentic japanese inspired shrimp tempura prepared fresh by our chefs using premium ingredients.",
      price: 14.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 680,
        protein_g: 15,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/shrimp-tempura.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/shrimp-tempura_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-010",
      name: "Chicken Teriyaki Bento",
      cuisine: "Japanese",
      category: "Main Course",
      description: "A delicious and authentic japanese inspired chicken teriyaki bento prepared fresh by our chefs using premium ingredients.",
      price: 18.24,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 285,
        protein_g: 25,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/chicken-teriyaki-bento.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/chicken-teriyaki-bento_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-011",
      name: "Miso Soup",
      cuisine: "Japanese",
      category: "Appetizer",
      description: "A delicious and authentic japanese inspired miso soup prepared fresh by our chefs using premium ingredients.",
      price: 21.49,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 490,
        protein_g: 35,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/miso-soup.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/miso-soup_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-012",
      name: "Butter Chicken",
      cuisine: "Indian",
      category: "Main Course",
      description: "A delicious and authentic indian inspired butter chicken prepared fresh by our chefs using premium ingredients.",
      price: 22.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 1
      },
      nutrition: {
        calories: 440,
        protein_g: 5,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/butter-chicken.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/butter-chicken_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-013",
      name: "Paneer Tikka Masala",
      cuisine: "Indian",
      category: "Main Course",
      description: "A delicious and authentic indian inspired paneer tikka masala prepared fresh by our chefs using premium ingredients.",
      price: 25.74,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 2
      },
      nutrition: {
        calories: 645,
        protein_g: 15,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/paneer-tikka-masala.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/paneer-tikka-masala_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-014",
      name: "Samosa Chaat",
      cuisine: "Indian",
      category: "Appetizer",
      description: "A delicious and authentic indian inspired samosa chaat prepared fresh by our chefs using premium ingredients.",
      price: 11.49,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 2
      },
      nutrition: {
        calories: 850,
        protein_g: 25,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/samosa-chaat.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/samosa-chaat_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-015",
      name: "Chicken Biryani",
      cuisine: "Indian",
      category: "Main Course",
      description: "A delicious and authentic indian inspired chicken biryani prepared fresh by our chefs using premium ingredients.",
      price: 12.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 3
      },
      nutrition: {
        calories: 200,
        protein_g: 35,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/chicken-biryani.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/chicken-biryani_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-016",
      name: "Garlic Naan",
      cuisine: "Indian",
      category: "Side",
      description: "A delicious and authentic indian inspired garlic naan prepared fresh by our chefs using premium ingredients.",
      price: 15.74,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 405,
        protein_g: 5,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/garlic-naan.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/garlic-naan_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-017",
      name: "Carne Asada Tacos",
      cuisine: "Mexican",
      category: "Main Course",
      description: "A delicious and authentic mexican inspired carne asada tacos prepared fresh by our chefs using premium ingredients.",
      price: 18.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 2
      },
      nutrition: {
        calories: 610,
        protein_g: 15,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/carne-asada-tacos.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/carne-asada-tacos_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-018",
      name: "Chicken Enchiladas",
      cuisine: "Mexican",
      category: "Main Course",
      description: "A delicious and authentic mexican inspired chicken enchiladas prepared fresh by our chefs using premium ingredients.",
      price: 19.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 2
      },
      nutrition: {
        calories: 560,
        protein_g: 25,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/chicken-enchiladas.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/chicken-enchiladas_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-019",
      name: "Guacamole & Chips",
      cuisine: "Mexican",
      category: "Appetizer",
      description: "A delicious and authentic mexican inspired guacamole & chips prepared fresh by our chefs using premium ingredients.",
      price: 23.24,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 765,
        protein_g: 35,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/guacamole-and-chips.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/guacamole-and-chips_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-020",
      name: "Churros with Chocolate",
      cuisine: "Mexican",
      category: "Dessert",
      description: "A delicious and authentic mexican inspired churros with chocolate prepared fresh by our chefs using premium ingredients.",
      price: 26.49,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 370,
        protein_g: 5,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/churros-with-chocolate.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/churros-with-chocolate_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-021",
      name: "Beef Burrito",
      cuisine: "Mexican",
      category: "Main Course",
      description: "A delicious and authentic mexican inspired beef burrito prepared fresh by our chefs using premium ingredients.",
      price: 9.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 2
      },
      nutrition: {
        calories: 320,
        protein_g: 15,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/beef-burrito.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/beef-burrito_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-022",
      name: "Cheeseburger & Fries",
      cuisine: "American",
      category: "Main Course",
      description: "A delicious and authentic american inspired cheeseburger & fries prepared fresh by our chefs using premium ingredients.",
      price: 13.24,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 525,
        protein_g: 25,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/cheeseburger-and-fries.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/cheeseburger-and-fries_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-023",
      name: "BBQ Pork Ribs",
      cuisine: "American",
      category: "Main Course",
      description: "A delicious and authentic american inspired bbq pork ribs prepared fresh by our chefs using premium ingredients.",
      price: 16.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 730,
        protein_g: 35,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/bbq-pork-ribs.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/bbq-pork-ribs_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-024",
      name: "Buffalo Chicken Wings",
      cuisine: "American",
      category: "Appetizer",
      description: "A delicious and authentic american inspired buffalo chicken wings prepared fresh by our chefs using premium ingredients.",
      price: 17.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 3
      },
      nutrition: {
        calories: 680,
        protein_g: 5,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/buffalo-chicken-wings.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/buffalo-chicken-wings_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-025",
      name: "Macaroni and Cheese",
      cuisine: "American",
      category: "Side",
      description: "A delicious and authentic american inspired macaroni and cheese prepared fresh by our chefs using premium ingredients.",
      price: 20.74,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 285,
        protein_g: 15,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/macaroni-and-cheese.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/macaroni-and-cheese_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-026",
      name: "Caesar Salad",
      cuisine: "American",
      category: "Salad",
      description: "A delicious and authentic american inspired caesar salad prepared fresh by our chefs using premium ingredients.",
      price: 23.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 490,
        protein_g: 25,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/caesar-salad.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/caesar-salad_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-027",
      name: "Apple Pie",
      cuisine: "American",
      category: "Dessert",
      description: "A delicious and authentic american inspired apple pie prepared fresh by our chefs using premium ingredients.",
      price: 24.99,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 440,
        protein_g: 35,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/apple-pie.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/apple-pie_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-028",
      name: "Pad Thai",
      cuisine: "Thai",
      category: "Main Course",
      description: "A delicious and authentic thai inspired pad thai prepared fresh by our chefs using premium ingredients.",
      price: 10.74,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 2
      },
      nutrition: {
        calories: 645,
        protein_g: 5,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/pad-thai.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/pad-thai_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-029",
      name: "Tom Yum Goong",
      cuisine: "Thai",
      category: "Soup",
      description: "A delicious and authentic thai inspired tom yum goong prepared fresh by our chefs using premium ingredients.",
      price: 13.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 3
      },
      nutrition: {
        calories: 850,
        protein_g: 15,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/tom-yum-goong.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/tom-yum-goong_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-030",
      name: "Green Curry Chicken",
      cuisine: "Thai",
      category: "Main Course",
      description: "A delicious and authentic thai inspired green curry chicken prepared fresh by our chefs using premium ingredients.",
      price: 14.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 3
      },
      nutrition: {
        calories: 200,
        protein_g: 25,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/green-curry-chicken.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/green-curry-chicken_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-031",
      name: "Mango Sticky Rice",
      cuisine: "Thai",
      category: "Dessert",
      description: "A delicious and authentic thai inspired mango sticky rice prepared fresh by our chefs using premium ingredients.",
      price: 18.24,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 405,
        protein_g: 35,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/mango-sticky-rice.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/mango-sticky-rice_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-032",
      name: "Croissant",
      cuisine: "French",
      category: "Bakery",
      description: "A delicious and authentic french inspired croissant prepared fresh by our chefs using premium ingredients.",
      price: 21.49,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 610,
        protein_g: 5,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/croissant.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/croissant_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-033",
      name: "Coq au Vin",
      cuisine: "French",
      category: "Main Course",
      description: "A delicious and authentic french inspired coq au vin prepared fresh by our chefs using premium ingredients.",
      price: 22.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 560,
        protein_g: 15,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/coq-au-vin.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/coq-au-vin_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-034",
      name: "Crème Brûlée",
      cuisine: "French",
      category: "Dessert",
      description: "A delicious and authentic french inspired crème brûlée prepared fresh by our chefs using premium ingredients.",
      price: 25.74,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 765,
        protein_g: 25,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/crème-brûlée.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/crème-brûlée_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-035",
      name: "French Onion Soup",
      cuisine: "French",
      category: "Soup",
      description: "A delicious and authentic french inspired french onion soup prepared fresh by our chefs using premium ingredients.",
      price: 11.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 370,
        protein_g: 35,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/french-onion-soup.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/french-onion-soup_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-036",
      name: "Greek Salad",
      cuisine: "Greek",
      category: "Salad",
      description: "A delicious and authentic greek inspired greek salad prepared fresh by our chefs using premium ingredients.",
      price: 12.49,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 320,
        protein_g: 5,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/greek-salad.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/greek-salad_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-037",
      name: "Chicken Souvlaki",
      cuisine: "Greek",
      category: "Main Course",
      description: "A delicious and authentic greek inspired chicken souvlaki prepared fresh by our chefs using premium ingredients.",
      price: 15.74,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 525,
        protein_g: 15,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/chicken-souvlaki.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/chicken-souvlaki_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-038",
      name: "Hummus & Pita",
      cuisine: "Middle Eastern",
      category: "Appetizer",
      description: "A delicious and authentic middle eastern inspired hummus & pita prepared fresh by our chefs using premium ingredients.",
      price: 18.99,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 730,
        protein_g: 25,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/hummus-and-pita.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/hummus-and-pita_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-039",
      name: "Falafel Wrap",
      cuisine: "Middle Eastern",
      category: "Main Course",
      description: "A delicious and authentic middle eastern inspired falafel wrap prepared fresh by our chefs using premium ingredients.",
      price: 19.99,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: true,
        spicy_level: 1
      },
      nutrition: {
        calories: 680,
        protein_g: 35,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/falafel-wrap.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/falafel-wrap_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-040",
      name: "Kung Pao Chicken",
      cuisine: "Chinese",
      category: "Main Course",
      description: "A delicious and authentic chinese inspired kung pao chicken prepared fresh by our chefs using premium ingredients.",
      price: 23.24,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 3
      },
      nutrition: {
        calories: 285,
        protein_g: 5,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/kung-pao-chicken.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/kung-pao-chicken_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-041",
      name: "Dim Sum Pork Dumplings",
      cuisine: "Chinese",
      category: "Appetizer",
      description: "A delicious and authentic chinese inspired dim sum pork dumplings prepared fresh by our chefs using premium ingredients.",
      price: 26.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 490,
        protein_g: 15,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/dim-sum-pork-dumplings.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/dim-sum-pork-dumplings_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-042",
      name: "Beef & Broccoli",
      cuisine: "Chinese",
      category: "Main Course",
      description: "A delicious and authentic chinese inspired beef & broccoli prepared fresh by our chefs using premium ingredients.",
      price: 9.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 0
      },
      nutrition: {
        calories: 440,
        protein_g: 25,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/beef-and-broccoli.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/beef-and-broccoli_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-043",
      name: "Spring Rolls",
      cuisine: "Chinese",
      category: "Appetizer",
      description: "A delicious and authentic chinese inspired spring rolls prepared fresh by our chefs using premium ingredients.",
      price: 13.24,
      attributes: {
        is_vegetarian: true,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 645,
        protein_g: 35,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/spring-rolls.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/spring-rolls_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-044",
      name: "Pho Bo (Beef Noodles)",
      cuisine: "Vietnamese",
      category: "Main Course",
      description: "A delicious and authentic vietnamese inspired pho bo (beef noodles) prepared fresh by our chefs using premium ingredients.",
      price: 16.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 1
      },
      nutrition: {
        calories: 850,
        protein_g: 5,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/pho-bo-beef-noodles.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/pho-bo-beef-noodles_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-045",
      name: "Banh Mi Sandwich",
      cuisine: "Vietnamese",
      category: "Main Course",
      description: "A delicious and authentic vietnamese inspired banh mi sandwich prepared fresh by our chefs using premium ingredients.",
      price: 17.49,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 2
      },
      nutrition: {
        calories: 200,
        protein_g: 15,
        carbs_g: 55,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/banh-mi-sandwich.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/banh-mi-sandwich_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-046",
      name: "Bibimbap",
      cuisine: "Korean",
      category: "Main Course",
      description: "A delicious and authentic korean inspired bibimbap prepared fresh by our chefs using premium ingredients.",
      price: 20.74,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 2
      },
      nutrition: {
        calories: 405,
        protein_g: 25,
        carbs_g: 70,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/bibimbap.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/bibimbap_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-047",
      name: "Kimchi Fried Rice",
      cuisine: "Korean",
      category: "Main Course",
      description: "A delicious and authentic korean inspired kimchi fried rice prepared fresh by our chefs using premium ingredients.",
      price: 23.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 2
      },
      nutrition: {
        calories: 610,
        protein_g: 35,
        carbs_g: 85,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/kimchi-fried-rice.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/kimchi-fried-rice_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-048",
      name: "Spanish Seafood Paella",
      cuisine: "Spanish",
      category: "Main Course",
      description: "A delicious and authentic spanish inspired spanish seafood paella prepared fresh by our chefs using premium ingredients.",
      price: 24.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: true,
        spicy_level: 1
      },
      nutrition: {
        calories: 560,
        protein_g: 5,
        carbs_g: 10,
        fat_g: 5
      },
      images: {
        full_size: "https://images.example.com/dishes/full/spanish-seafood-paella.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/spanish-seafood-paella_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-049",
      name: "Churrasco Steak",
      cuisine: "Brazilian",
      category: "Main Course",
      description: "A delicious and authentic brazilian inspired churrasco steak prepared fresh by our chefs using premium ingredients.",
      price: 10.74,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 765,
        protein_g: 15,
        carbs_g: 25,
        fat_g: 13
      },
      images: {
        full_size: "https://images.example.com/dishes/full/churrasco-steak.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/churrasco-steak_thumb.jpg"
      }
    },
    {
      dish_id: "DISH-050",
      name: "Fish and Chips",
      cuisine: "British",
      category: "Main Course",
      description: "A delicious and authentic british inspired fish and chips prepared fresh by our chefs using premium ingredients.",
      price: 13.99,
      attributes: {
        is_vegetarian: false,
        is_gluten_free: false,
        spicy_level: 0
      },
      nutrition: {
        calories: 370,
        protein_g: 25,
        carbs_g: 40,
        fat_g: 21
      },
      images: {
        full_size: "https://images.example.com/dishes/full/fish-and-chips.jpg",
        thumbnail: "https://images.example.com/dishes/thumbs/fish-and-chips_thumb.jpg"
      }
    }
  ]
}