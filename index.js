function hideSignUp() {
  document.querySelector(".sign-up").style.display = "none";
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
