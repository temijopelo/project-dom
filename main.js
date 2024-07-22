const cartList = document.querySelectorAll("ul li");
let totalAmount = 0;

// iterating over the li items

cartList.forEach((item) => {
  const increaseBtn = item.querySelector(".increaseBtn");
  const decreaseBtn = item.querySelector(".decreaseBtn");
  const quantitySpan = item.querySelector(".quantitySpan");
  const heartIcon = item.querySelector(".heartIcon");
  const itemPrice = parseFloat(
    item.querySelector(".item-price").textContent.slice(2)
  );

  totalAmount += parseInt(quantitySpan.textContent) * itemPrice;
  updateAmount();

  // increment buttons

  increaseBtn.addEventListener("click", () => {
    let currentQuantitySpan = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = currentQuantitySpan + 1;
    totalAmount += itemPrice;
    updateAmount();
  });

  //   decrement button

  decreaseBtn.addEventListener("click", () => {
    let currentQuantitySpan = parseInt(quantitySpan.textContent);
    if (currentQuantitySpan > 1) {
      quantitySpan.textContent = currentQuantitySpan - 1;
    } else {
      currentQuantitySpan = 1;
    }
  });

  const delBtn = item.querySelector(".delBtn");
  delBtn.addEventListener("click", () => {
    item.remove();

    console.log("deleted");
  });

  // like function

  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("active");
  });
});

function updateAmount() {
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}
