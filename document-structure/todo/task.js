const form = document.getElementById('tasks__form');
const list = document.querySelector('.tasks__list');
const input = document.getElementById('task__input');

function fun1() {
 let text = input.value.trim();
 list.insertAdjacentHTML('afterbegin',
  `<div class="task">
   <div class="task__title">
    ${text}
   </div>
   <a href="#" class="task__remove">&times;</a>
  </div>`
 );
}

input.addEventListener('keydown', (e) => {
 if (e.keyCode === 13) {
  fun1();
  form.reset();
 }
}
);

tasks.addEventListener('click', (event) => {
 if (event.target.classList.contains('task__remove')) {
  event.target.closest('.task').remove();
 }
});