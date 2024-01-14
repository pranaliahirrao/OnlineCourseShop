// cart.js
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const clearCartButton = document.getElementById('clear-cart-btn');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const courseName = button.dataset.name;
        const coursePrice = parseFloat(button.dataset.price);
        addToCart(courseName, coursePrice);
      });
    });
  
    clearCartButton.addEventListener('click', function () {
      clearCart();
      updateCartUI(); // After clearing, update the UI
    });
  
    // Other cart-related functionality can be added here
  });
  
  function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI(); // After adding, update the UI
  }
  
  function clearCart() {
    localStorage.removeItem('cart');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateCartUI();
  });
  
  function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;
  
    cartItemsElement.innerHTML = '';
  
    if (cart.length === 0) {
      // Clear localStorage if cart is empty
      localStorage.removeItem('cart');
      totalPriceElement.textContent = 'Total: Rs 0.00'; // Set total amount to zero
    } else {
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
          <div class="d-flex justify-content-between">
            <span>${item.name}</span>
            <span>Rs ${item.price.toFixed(2)}</span>
          </div>
        `;
        cartItemsElement.appendChild(listItem);
  
        totalPrice += item.price;
      });
  
      totalPriceElement.textContent = `Total: Rs ${totalPrice.toFixed(2)}`;
    }
  }
  
  