const orderItems = document.getElementById("order-items");
const orderTotal = document.getElementById("order-total");
const placeOrderBtn = document.getElementById("place-order-btn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  alert("Cart is empty");
  window.location.href = "index.html";
}

let total = 0;

cart.forEach(item => {
  total += item.price;
  orderItems.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
});

orderTotal.innerText = "Total Amount: ₹" + total;

placeOrderBtn.addEventListener("click", () => {
  const payment = document.querySelector('input[name="payment"]:checked');

  if (!payment) {
    alert("Please select payment method");
    return;
  }

  localStorage.removeItem("cart");
  window.location.href = "success.html";
});
