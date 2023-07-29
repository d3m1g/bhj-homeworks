const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';

xhr.addEventListener('readystatechange',  () => {
 if (xhr.readyState === xhr.DONE) {
  let response = xhr.response;

  pollTitle.innerText = response.data.title;
  response.data.answers.forEach((item) => {
   let button = document.createElement("button");
   button.classList.add("poll__answer");

   button.innerText = item;
   pollAnswers.appendChild(button);
  });

  document.querySelectorAll('.poll__answer').forEach((button) => {
   button.addEventListener('click', (e) => {
    alert("Спасибо, ваш голос засчитан!");
   })
  })
 }
})

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();