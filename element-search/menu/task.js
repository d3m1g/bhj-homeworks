const linkClick = document.getElementsByClassName("menu__link");
const menuSub = document.querySelectorAll("ul.menu.menu_sub");
const arr = Array.from(linkClick);

for (let i = 0; i < arr.length; i++) {
 arr[i].onclick = (event) => {
  const target = event.target;
  if (target.parentElement.querySelector("ul") === null) {
   return;
  }

  if (target.parentElement.querySelector("ul").className === "menu menu_sub menu_active") {
   target.parentElement.querySelector("ul").className = "menu menu_sub";
   return false;
  }

  menuSub.forEach((element) => {
   element.className = "menu menu_sub";
  })

  target.parentElement.querySelector("ul").className = "menu menu_sub menu_active";
  return false;
 }
}