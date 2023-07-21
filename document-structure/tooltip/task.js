const a = document.getElementsByClassName('has-tooltip');
const arr = Array.from(a);
const active = document.getElementsByClassName('tooltip_active');
let divTip = document.createElement('div');

function fun1() {
 if (active.length === 1) {
  active[0].classList.remove('tooltip_active');
 }
}

arr.forEach((el) => {
 el.onclick = (event) => {
  fun1();
  divTip.classList.add('tooltip', 'tooltip_active');
  divTip.innerText = el.title;
  event.preventDefault();
  document.body.append(divTip);
 }
}
);