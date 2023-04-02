// Вариант 1

// const pageTimer = document.getElementById("timer");
// let second = Number(pageTimer.textContent);
// function countDown() { 
//  second--;
//  pageTimer.textContent = second;

//  if (second === 0) {
//   clearInterval;
//   alert("Вы победили в конкурсе!");
//   second = 60;
//  }
// }
// setInterval(countDown, 1000);


// Вариант2

// const pageTimer = document.getElementById("timer");
// let second = Number(pageTimer.textContent);
// function countDown() { 
//  second--;
//  pageTimer.textContent = new Date(2023, 1, 2, 0, 0, second).toLocaleTimeString();

//  if (second === 0) {
//   clearInterval;
//   alert("Вы победили в конкурсе!");
//   second = 60;
//  }
// }
// setInterval(countDown, 1000);

// Вариант 3

const pageTimer = document.getElementById("timer");
let second = Number(pageTimer.textContent);
function countDown() {
 second--;
 pageTimer.textContent = new Date(2023, 4, 2, 0, 0, second).toLocaleTimeString();

 if (second === 0) {
  clearInterval(intervalVar);
  alert("Вы победили в конкурсе!");
  window.location.href = "./test.rar";
  second = 10;
 }
}

const intervalVar = setInterval(countDown, 1000);