const drop = document.querySelector('.dropdown__value');
const itemList = document.querySelectorAll('.dropdown__link');
const arr = Array.from(itemList);

drop.addEventListener('click', openMenu);

function openMenu() {
 if (document.querySelector('ul').className === "dropdown__list") {
  document.querySelector('ul').className = "dropdown__list dropdown__list_active";
 } else {
  document.querySelector('ul').className = "dropdown__list";
 }
}

arr.forEach(item => {
 item.onclick = function() {  
  drop.textContent = item.textContent;
  document.querySelector('ul').className = "dropdown__list";
  return false;
 }
})
