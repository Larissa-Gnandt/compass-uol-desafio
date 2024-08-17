function hideSignUp() {
  document.querySelector("#sign-up-container").style.display = "none";
}

function previousReview() {
  const reviewsContainer = document.querySelector(
    "#reviews-carousel-container"
  );
  reviewsContainer.scrollBy({
    left: -reviewsContainer.offsetWidth,
    behavior: "smooth",
  });
}

function nextReview() {
  const reviewsContainer = document.querySelector(
    "#reviews-carousel-container"
  );
  reviewsContainer.scrollBy({
    left: reviewsContainer.offsetWidth,
    behavior: "smooth",
  });
}

window.addEventListener("resize", () => {
  handleHeroContainer();
  handleStatsSeparator();
  handleBrandsJustifyContent();
});

function containerHasMultipleLines(containerId) {
  const container = document.querySelector(containerId);
  const items = Array.from(container.children);
  return items.some((item) => item.offsetTop !== items[0].offsetTop);
}

function handleStatsSeparator() {
  const dynamicSeparator = document.querySelector(
    "#hero-details-dynamic-separator"
  );

  const hasMultipleLines = containerHasMultipleLines(
    "#hero-details-stats-container"
  );
  if (hasMultipleLines) {
    dynamicSeparator.style.opacity = "0";
  } else {
    dynamicSeparator.style.opacity = "1";
  }
}

function handleHeroContainer() {
  const heroContainer = document.querySelector("#hero-container");
  if (window.innerWidth > 768) {
    heroContainer.style.paddingLeft = "100px";
    if (containerHasMultipleLines("#hero-container")) {
      heroContainer.style.paddingRight = "100px";
    } else {
      heroContainer.style.paddingRight = "0";
    }
  } else {
    heroContainer.style.paddingLeft = "16px";
    heroContainer.style.paddingRight = "16px";
  }
}

function handleBrandsJustifyContent() {
  const brandsContainer = document.querySelector("#brands-container");
  if (containerHasMultipleLines("#brands-container")) {
    brandsContainer.style.justifyContent = "center";
  } else {
    brandsContainer.style.justifyContent = "space-between";
  }
}

function setupProducts(products, containerId) {
  const container = document.getElementById(containerId);
  products.forEach((product) => {
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

    container.appendChild(productItem);
  });
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

const newArrivalsProducts = [
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

const topSellingProducts = [
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

setupProducts(newArrivalsProducts, "new-arrivals-container");
setupProducts(topSellingProducts, "top-selling-container");

const reviews = [
  {
    name: "Sarah M.",
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
    rate: 5,
  },
  {
    name: "Alex K.",
    content: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
    rate: 5,
  },
  {
    name: "James L.",
    content: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
    rate: 5,
  },
];

const reviewsContainer = document.getElementById("reviews-carousel-container");
[...reviews, ...reviews].forEach((review) => {
  const reviewItem = document.createElement("div");
  reviewItem.className = "reviews-carousel-item-container";

  const ratingContainer = document.createElement("div");
  ratingContainer.className = "reviews-stars-container";
  reviewItem.appendChild(ratingContainer);

  for (let index = 1; index <= review.rate; index++) {
    const star = document.createElement("img");
    star.src = "icons/star.svg";
    star.alt = "Star";
    ratingContainer.appendChild(star);
  }

  const reviewNameContainer = document.createElement("div");
  reviewNameContainer.className = "reviews-name-container";
  reviewItem.appendChild(reviewNameContainer);

  const reviewName = document.createElement("p");
  reviewName.textContent = review.name;
  reviewNameContainer.appendChild(reviewName);

  const checkIcon = document.createElement("img");
  checkIcon.src = "icons/check.svg";
  checkIcon.alt = "Check";
  reviewNameContainer.appendChild(checkIcon);

  const reviewContent = document.createElement("p");
  reviewContent.className = "reviews-item-content";
  reviewContent.textContent = review.content;
  reviewItem.appendChild(reviewContent);

  reviewsContainer.appendChild(reviewItem);
});
