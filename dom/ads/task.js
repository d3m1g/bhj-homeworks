const text = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0;

function show() {
 text[index].classList.add("rotator__case_active");
}

function hide() {
 text[index].classList.remove("rotator__case_active");
}
function next() {
 if (index >= (text.length - 1)) {
  index = 0;
 } else {
  index++;
 }
}

function rotate() {
 hide();
 next();
 show();
}

setInterval(rotate, 1000);