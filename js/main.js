let cartIcon = document.getElementById("cart-icon").addEventListener("click", function () {
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
    var removeCart = document.getElementsByClassName('cart-remove');
    console.log(removeCart);
    for( var m = 0; m < removeCart.length; m ++) {
        var button = removeCart[m];
        button.addEventListener('click', removeCartItems)
    }
  };
  function removeCartItems(event) {
    var buttonClicked = event.target 
    buttonClicked.parentElement.remove();
  }
  cartRemoveItem();