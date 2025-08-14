

let addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItemsContainer = document.querySelector('.cart-items'); // qery selctor all returns node list and can't be used as single in the code.
let cartTotal = document.querySelector('.cart-total');
let cart = [];
addToCartButtons.forEach(button => {

  button.addEventListener('click', () => {
    let productcard = button.closest('.product-card');
    let productName = productcard.querySelector('.product-name').textContent;
    let productPriceText = productcard.querySelector('.product-price').textContent;
    let productPrice = parseFloat(productPriceText.replace('$', ''));
     
    //  checking if the product already existed.

    const existingItem = cart.find(item => item.name === productName);

    if(existingItem){
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: productName,
        price: productPrice,
        quantity: 1
      });

    }
    renderCart();
  });
});

function renderCart(){
  cartItemsContainer.innerHTML = ''; // Clear current cart items
  let total = 0;

  cart.forEach((item, index) => {
    
    let li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    //  creating remove button.
    let remove_btn = document.createElement('button');
    remove_btn.textContent = 'remove';
    remove_btn.classList.add('remove-btn');

    remove_btn.addEventListener('click', () => { 
      cart.splice(index, 1);
      renderCart();
    });

    li.append(remove_btn);
    cartItemsContainer.append(li);

    total += item.price * item.quantity;
  });
 cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

/*  new  */



