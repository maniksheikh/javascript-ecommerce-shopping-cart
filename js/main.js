let cartIcon = document
  .getElementById("cart-icon")
  .addEventListener("click", function () {
    cart.classList.add("active");
    closeCart.classList.remove("active");
  });

let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".cart-close");
// Close cart
closeCart.addEventListener("click", function () {
  cart.classList.remove("active");
  closeCart.classList.add("active");
});

// Making Function
function cartRemoveItem() {
  var removeCart = document.getElementsByClassName("cart-remove");
  for (var m = 0; m < removeCart.length; m++) {
    var button = removeCart[m];
    button.addEventListener("click", removeCartItems);
  }

  // quantity change
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //  Add Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClick);
  }
  // Byu Button work 
   document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked)
}
// Buy button
  function buyButtonClicked() {
    alert('Your Order is Placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
  } 


function removeCartItems(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}
cartRemoveItem();

// quantity Changed
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}


// Add To Cart
function addCartClick(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;

  addProductToCart(productImg, title, price);
  updateTotal();
}

function addProductToCart(productImg, title, price) {
  var cartShopBox = document.createElement("div");
   cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsName = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsName.length; i++) {
    // alert("You have already added this product to the cart");
    // return;
  }

  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img" />
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity" />
    </div>
    <!-- Remove cart  -->
    <box-icon name="trash-alt" class="cart-remove"></box-icon>
  `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItems);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

// Update total
function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
    //  If price Contain some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
 
}
