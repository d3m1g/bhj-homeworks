const a = document.getElementsByClassName('has-tooltip');
const arr = Array.from(a);

const active = document.getElementsByClassName('tooltip_active');
let divTip = document.createElement('div');

function fun1() {
 active[0].classList.remove('tooltip_active');
}

arr.forEach((el) => {
 el.onclick = (event) => {
  if (active[0] !== undefined) {
   fun1();
  } else {
   divTip.classList.add('tooltip', 'tooltip_active');
   divTip.innerText = el.title;
   event.preventDefault();

   let tipPosition = el.getBoundingClientRect();
   divTip.style.top = tipPosition.top + 22 + 'px';
   divTip.style.left = tipPosition.left + 'px';

   document.body.append(divTip);
  }
 }
}
);