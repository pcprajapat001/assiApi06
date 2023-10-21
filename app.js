const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/category", (req, res) => {
  res.send(["Electronics", "Grocery", "Women's Clothes", "Men's Clothes"]);
});

app.get("/ele", (req, res) => {
  res.send([
    {
      id: 1,
      image:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/air_conditioner_0_1200x768.jpeg?VersionId=1ep_guOOJpkzYzpnu0.IOxwPvXKmFXim",
      name: "AC",
      price: 25000,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 2,
      image:
        "https://www.jiomart.com/images/product/original/rvksc1ykji/frutable-premium-whole-cashews-1-kg-kaju-w240-100-natural-good-cashew-nuts-dry-fruits-product-images-orvksc1ykji-p594734319-2-202301211814.png?im=Resize=(420,420)",
      name: "Cashew",
      price: 1037,
      rating: 4,
      category: "Grocery",
    },
    {
      id: 2,
      image:
        "https://static.hopscotch.in/fstatic/product/202201/e977306a-d55d-4345-afea-6c65df5e54c6_large.jpg?version=1642784062085&tr=w-480,c-at_max,n-normal",
      name: "Jeans and Top Set",
      price: 850,
      rating: 3,
      category: "Women's Clothes",
    },
    {
      id: 3,
      image:
        "https://www.intex.in/cdn/shop/products/1_9b8014ad-124e-4742-a628-9a4c4affe617.jpg?v=1648711109",
      name: "TV",
      price: 50000,
      rating: 3.7,
      category: "Electronics",
    },
    {
      id: 4,
      image:
        "https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Top-10-Mobile-Brands-in-World.jpg",
      name: "Mobile",
      price: 25000,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 5,
      image:
        "https://i0.wp.com/deployant.com/wp-content/uploads/2022/11/ciga-magician-back.jpg?resize=702%2C527&ssl=1",
      name: "Watch",
      price: 15000,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 6,
      image:
        "https://m.media-amazon.com/images/I/518LgDags0L._AC_UF894,1000_QL80_.jpg",
      name: "Fan",
      price: 7000,
      rating: 2,
      category: "Electronics",
    },
    {
      id: 7,
      image:
        "https://www.bajajmall.in/emistore/media/catalog/product/h/t/httpwww.lg.cominimagesrefrigeratorsgc-l207gsyvgalleryvdemedium-3.jpeg",
      name: "Refrigerator",
      price: 60000,
      rating: 5,
      category: "Electronics",
    },
    {
      id: 8,
      image:
        "https://static.connect2india.com/c2icd/product_resources/images/mens-striped-formal-shirts.jpg",
      name: "Formal Shirt",
      price: 600,
      rating: 2,
      category: "Men's Clothes",
    },
    {
      id: 9,
      image:
        "https://cdn.shopaccino.com/feranoid/categories/funky-t-shirts-banner-mobile-view-546324_m.jpg?v=496",
      name: "Formal Shirt",
      price: 1500,
      rating: 4,
      category: "Men's Clothes",
    },
    {
      id: 10,
      image:
        "https://m.media-amazon.com/images/I/41Io0HYbu4L._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingTHREE%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA29%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      name: "Charger",
      price: 1000,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 11,
      image:
        "https://www.jiomart.com/images/product/original/rv8tl7ukbm/dry-fruits-combo-pack-of-almonds-pistachios-cashews-raisins-walnuts-kaju-pista-badam-akhrot-kishmish-150gm-x-5-750-gm-product-images-orv8tl7ukbm-p594569836-3-202210172152.jpg?im=Resize=(420,420)",
      name: "Almond",
      price: 740,
      rating: 4,
      category: "Grocery",
    },
  ]);
});

app.listen(2121, () => {
  console.log("Write something");
});
