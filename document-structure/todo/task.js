const form = document.getElementById('tasks__form');
const list = document.querySelector('.tasks__list');
const input = document.getElementById('task__input');

function fun1() {
 let text = input.value.trim();

 if(text === '') {
  return false;
 }

 list.insertAdjacentHTML('afterbegin',
  `<div class="task">
   <div class="task__title">
    ${text}
   </div>
   <a href="#" class="task__remove">&times;</a>
  </div>`
 );
}

form.addEventListener('submit', (event) => {
 event.preventDefault();
 fun1();
 form.reset();
}
);

list.addEventListener('click', (event) => {
 if (event.target.classList.contains('task__remove')) {
  event.target.closest('.task').remove();
 }
});