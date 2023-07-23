// q = quantity

const qInc = document.querySelectorAll('.product__quantity-control_inc');
const qDec = document.querySelectorAll('.product__quantity-control_dec');
const qValue = [...document.getElementsByClassName('product__quantity-value')];

const addProduct = document.querySelectorAll('.product__add');
const cart = [...document.querySelectorAll('.cart__products')];

qInc.forEach((el) => {
 el.onclick = () => {
  el.parentElement.querySelector('.product__quantity-value').innerText++;
 }
})


qDec.forEach((el) => {
 el.onclick = () => {
  if (el.parentElement.querySelector('.product__quantity-value').innerText > 0) {
   el.parentElement.querySelector('.product__quantity-value').innerText--;
  }
 }
})


addProduct.forEach((el) => {
 el.onclick = () => {
  const qInCart = el.parentElement.querySelector('.product__quantity-value').innerText;
  const img = el.closest('.product').querySelector('img').getAttribute('src');
  const dataId = el.closest('.product').dataset.id;
  const alreadyInCart = [...document.querySelectorAll('.cart__product')];

  let findInCart = alreadyInCart.find(
   (element) => element.dataset.id === dataId
  );

  if (findInCart) {
   Number(alreadyInCart.querySelector('.cart__product-count').innerText) + Number(qInCart);
  } else {

   cart[0].insertAdjacentHTML('afterbegin',
    `
  <div class="cart__product" data-id="${dataId}">
  <img class="cart__product-image" src="${img}">
  <div class="cart__product-count">${qInCart}</div>
  `
   );
  }
 }
})