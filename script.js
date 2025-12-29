const products = [
  { name: "Round Eyeglasses", price: 999, img: "photos/910MG4380_1-new.webp" },
  { name: "Square Eyeglasses", price: 1299, img: "photos/BuyBlackClearMilestoneSquareSunglasses_1.webp" },
  { name: "Blue Cut Glasses", price: 1499, img: "photos/1_7c26482c-001f-49a6-adde-e10f49cfec0c_618x.webp" },
  { name: "Stylish Frame", price: 1999, img: "photos/images.jpg" },
  { name: "Kids Frame", price: 999, img: "photos/kids.avif" },
  { name: "Cat-Eye Frame", price: 499, img: "photos/Cat-Eye.webp" },
  { name: "Sports Frame", price: 2999, img: "photos/sports.webp" },
  { name: "Oval Frame", price: 399, img: "photos/shopping.webp" },
  { name: "Rectangle Frame", price: 699, img: "photos/OPERA.SilverBlackRectangleSunglasses_4__compressed.webp"},
  { name: "Reading Frame", price: 999, img: "photos/reading.avif" },
  { name: "Vintage Frame", price: 2999, img: "photos/vintage.jpg" },
    { name: "Fancy Frame", price: 999, img: "photos/Fancy.jpg" }


];

const productList = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");

// ✅ ALWAYS read from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ✅ ALWAYS save to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCountEl.innerText = cart.length;
}

// initial cart count
saveCart(getCart());

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.img}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button>Add to Cart</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);

    // DEBUG CHECK
    console.log("Saved cart:", localStorage.getItem("cart"));
  });

  productList.appendChild(card);
});

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const userNameEl = document.getElementById("user-name");

// Check login status
const user = JSON.parse(localStorage.getItem("user"));

if (user && user.name) {
  userNameEl.innerText = "Hi, " + user.name;
  loginBtn.style.display = "none";
  logoutBtn.style.display = "inline-block";
} else {
  userNameEl.innerText = "";
}

const userName = document.getElementById("user-name");
const loggedInUser = localStorage.getItem("loggedInUser");

if (loggedInUser) {
  userName.innerText = loggedInUser;   // only username
  loginBtn.style.display = "none";
  logoutBtn.style.display = "inline-block";
} else {
  userName.innerText = "";
  loginBtn.style.display = "inline-block";
  logoutBtn.style.display = "none";
}

// Login button click
loginBtn.onclick = () => {
  window.location.href = "login.html";
};

// Logout button click
logoutBtn.onclick = () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
};





