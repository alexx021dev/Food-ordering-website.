let addToCartButtons = document.querySelectorAll('.add-to-cart');
// all the add to cart buttons in the page returns list of all  buttons.

//  the goal of this function is to add event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {

        let productCard = button.closest('.product-card');
        let productName = productCard.querySelector('.product-name').textContent;
        console.log(`Product added to cart: ${productName}`);

    })
});

// showing the added product to the cart list

const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

let cart = []; // To keep track of products in cart is array of objects 

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent;
    const productPriceText = productCard.querySelector('.product-price').textContent;
    const productPrice = parseFloat(productPriceText.replace('$', ''));

    // Add product to cart array
    cart.push({ name: productName, price: productPrice });

    // Update the cart display
    renderCart(); // takes all this and add readymade item  to the cart.
  });
});

function renderCart() {
  cartItemsContainer.innerHTML = ''; // Clear current cart

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

