const a = document.getElementsByClassName('has-tooltip');
const arr = Array.from(a);
const active = document.getElementsByClassName('tooltip_active');

function fun1() {
 if (active.length === 1) {
  active[0].className = "has-tooltip";
 }   
}

arr.forEach((el) => {
 el.onclick = (event) => {
  fun1();
  el.classList.add('tooltip', 'tooltip_active');
  el.innerText = el.title;
  event.preventDefault();  
 }
}
);