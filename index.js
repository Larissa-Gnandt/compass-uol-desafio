function hideSignUp() {
  document.querySelector("#sign-up-container").style.display = "none";
}

const brands = [
  {
    image: "images/versace.svg",
    name: "Versace",
  },
  {
    image: "images/zara.svg",
    name: "Zara",
  },
  {
    image: "images/gucci.svg",
    name: "Gucci",
  },
  {
    image: "images/prada.svg",
    name: "Prada",
  },
  {
    image: "images/ck.svg",
    name: "Calvin Klein",
  },
];
const brandsContainer = document.getElementById("brands-container");
brands.forEach((brand) => {
  const brandItem = document.createElement("img");
  brandItem.className = "brand-item";
  brandItem.src = brand.image;
  brandItem.alt = brand.name;
  brandsContainer.appendChild(brandItem);
});

const arrivalsProducts = [
  {
    image: "images/t-shirt1.png",
    name: "T-shirt with Tape Details",
    rating: 4.5,
    price: "$120",
    priceFrom: null,
    discount: null,
  },
  {
    image: "images/pants1.png",
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: "$240",
    priceFrom: "$260",
    discount: "-20%",
  },
  {
    image: "images/t-shirt2.png",
    name: "Checkered Shirt",
    rating: 4.5,
    price: "$180",
    priceFrom: null,
    discount: null,
  },
  {
    image: "images/t-shirt3.png",
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: "$130",
    priceFrom: "160",
    discount: "-30%",
  },
];
const arrivalsContainer = document.getElementById("arrivals-container");
arrivalsProducts.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.className = "product-container";

  const productImage = document.createElement("img");
  productImage.className = "product-image";
  productImage.src = product.image;
  productImage.alt = product.name;
  productItem.appendChild(productImage);

  const productDetails = document.createElement("div");
  productDetails.className = "product-details-container";
  productItem.appendChild(productDetails);

  const productName = document.createElement("p");
  productName.className = "product-name";
  productName.textContent = product.name;
  productDetails.appendChild(productName);

  const ratingContainer = document.createElement("div");
  ratingContainer.className = "product-rating-container";
  productDetails.appendChild(ratingContainer);

  for (let index = 1; index <= product.rating; index++) {
    const star = document.createElement("img");
    star.src = "icons/star.svg";
    star.alt = "star";
    ratingContainer.appendChild(star);
  }

  if (product.rating % 1 !== 0) {
    const halfStar = document.createElement("img");
    halfStar.src = "icons/star-half.svg";
    halfStar.alt = "half-star";
    ratingContainer.appendChild(halfStar);
  }

  const rating = document.createElement("p");
  rating.className = "product-rating";
  rating.textContent = `${product.rating}/5`;
  ratingContainer.appendChild(rating);

  const priceContainer = document.createElement("div");
  priceContainer.className = "price-container";
  productDetails.appendChild(priceContainer);

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = product.price;
  priceContainer.appendChild(price);

  if (product.priceFrom) {
    const priceFrom = document.createElement("p");
    priceFrom.className = "product-price-from";
    priceFrom.textContent = product.priceFrom;
    priceContainer.appendChild(priceFrom);
  }

  if (product.discount) {
    const discount = document.createElement("p");
    discount.className = "product-discount-percentage";
    discount.textContent = product.discount;
    priceContainer.appendChild(discount);
  }

  arrivalsContainer.appendChild(productItem);
});

const sellingProducts = [
  {
    image: "images/t-shirt4.png",
    name: "Vertical Striped Shirt",
    rating: 5,
    price: "$212",
    priceFrom: "232",
    discount: "-20%",
  },
  {
    image: "images/t-shirt5.png",
    name: "Courage Graphic T-shirt",
    rating: 4,
    price: "$145",
    priceFrom: null,
    discount: null,
  },
  {
    image: "images/shorts1.png",
    name: "Loose Fit Bermuda Shorts",
    rating: 3,
    price: "$80",
    priceFrom: null,
    discount: null,
  },
  {
    image: "images/pants2.png",
    name: "Faded Skinny Jeans",
    rating: 4.5,
    price: "$210",
    priceFrom: null,
    discount: null,
  },
];

const sellingContainer = document.getElementById("selling-container");
sellingProducts.forEach((product) => {
  const productItem = document.createElement("div");
  productItem.className = "product-container";

  const productImage = document.createElement("img");
  productImage.className = "product-image";
  productImage.src = product.image;
  productImage.alt = product.name;
  productItem.appendChild(productImage);

  const productDetails = document.createElement("div");
  productDetails.className = "product-details-container";
  productItem.appendChild(productDetails);

  const productName = document.createElement("p");
  productName.className = "product-name";
  productName.textContent = product.name;
  productDetails.appendChild(productName);

  const ratingContainer = document.createElement("div");
  ratingContainer.className = "product-rating-container";
  productDetails.appendChild(ratingContainer);

  for (let index = 1; index <= product.rating; index++) {
    const star = document.createElement("img");
    star.src = "icons/star.svg";
    star.alt = "star";
    ratingContainer.appendChild(star);
  }

  if (product.rating % 1 !== 0) {
    const halfStar = document.createElement("img");
    halfStar.src = "icons/star-half.svg";
    halfStar.alt = "half-star";
    ratingContainer.appendChild(halfStar);
  }

  const rating = document.createElement("p");
  rating.className = "product-rating";
  rating.textContent = `${product.rating}/5`;
  ratingContainer.appendChild(rating);

  const priceContainer = document.createElement("div");
  priceContainer.className = "price-container";
  productDetails.appendChild(priceContainer);

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = product.price;
  priceContainer.appendChild(price);

  if (product.priceFrom) {
    const priceFrom = document.createElement("p");
    priceFrom.className = "product-price-from";
    priceFrom.textContent = product.priceFrom;
    priceContainer.appendChild(priceFrom);
  }

  if (product.discount) {
    const discount = document.createElement("p");
    discount.className = "product-discount-percentage";
    discount.textContent = product.discount;
    priceContainer.appendChild(discount);
  }

  sellingContainer.appendChild(productItem);
});
