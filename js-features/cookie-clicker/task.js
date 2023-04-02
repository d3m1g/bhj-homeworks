const clickCounter = document.getElementById("clicker__counter");
const imageToClick = document.getElementById("cookie");
const clickSpeed = document.getElementById("clicker__speed");

let startClick;
let endClick;

imageToClick.onclick = function (event) {
 if (event.altKey) {
  clickCounter.textContent = -1;
  clickSpeed.textContent = 0;
 } 

 clickCounter.textContent = Number(clickCounter.textContent) + 1;

 if (Number(clickCounter.textContent) === 0) {
  startClick = new Date();
 } else {
  endClick = new Date();
  clickSpeed.textContent = (1 / ((endClick - startClick) / 1000)).toFixed(2);
  startClick = endClick;
 }

 if (Number(clickCounter.textContent) % 2 !== 0) {
  imageToClick.width = "300";
 } else {
  imageToClick.width = "200";
 }
}