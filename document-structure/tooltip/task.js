const a = document.querySelectorAll('.has-tooltip');
const arr = Array.from(a);

arr.forEach((el) => {
 el.onclick = (event) => {  
  el.classList.add('tooltip','tooltip_active');
  event.preventDefault();
 };
});