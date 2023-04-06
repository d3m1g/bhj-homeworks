const linkClick = document.getElementsByClassName("menu__link");
const menuSub = document.querySelectorAll("ul.menu.menu_sub");
const arr = Array.from(linkClick);

for (let i = 0; i < arr.length; i++) {
 arr[i].onclick = (event) => {
  menuSub.forEach((element) => {
   element.className = "menu menu_sub";
  })

  const target = event.target;
  target.parentElement.querySelector("ul").className = "menu menu_sub menu_active";
  return false;
 }
}