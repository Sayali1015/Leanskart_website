let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const products = [
  {
    name: "Round Eyeglasses",
    price: 999,
    img: "photos/910MG4380_1-new.webp"
  },
  {
    name: "Square Eyeglasses",
    price: 1299,
    img: "photos/BuyBlackClearMilestoneSquareSunglasses_1.webp"
  },
  {
    name: "Blue Cut Glasses",
    price: 1499,
    img: "photos/1_7c26482c-001f-49a6-adde-e10f49cfec0c_618x.webp"
  },
  {
    name: "Stylish Frame",
    price: 1999,
    img: "photos/images.jpg"
  }
];


function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <p>${item.name}</p>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalEl.innerText = "Total Amount: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();

const buyNowBtn = document.getElementById("buy-now-btn");

if (buyNowBtn) {
  buyNowBtn.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });
}




