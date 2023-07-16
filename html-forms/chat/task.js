const chatWindow = [...document.getElementsByClassName('chat-widget')];
const input = document.querySelector('input');

const messages = document.querySelector('.chat-widget__messages');
const arrOfMsgs = Array.from(messages);

const botMsgs = [
 "Здравствуйте!",
 "Пишите ещё",
 "Досвидания!",
];

function time() {
 return new Date(Date.now()).toTimeString().slice(0, 5);
}

function fun1() {

 messages.innerHTML += `
<div class="message message_client">

<div class="message__time">
${time()}
</div>

<div class="message__text">
${input.value}
</div>

</div>
`

 input.value = '';
};

function fun2() {
 let randomAnswer = Math.floor(Math.random() * botMsgs.length);

 messages.innerHTML += `
 <div class="message">

 <div class="message__time">
 ${time()}
 </div>

 <div class="message__text">
 ${botMsgs[randomAnswer]}
 </div>

 </div>
`
}

chatWindow.forEach((el) => {
 el.onclick = () => {
  el.classList.add("chat-widget_active");
 };
});

input.addEventListener('keydown', (e) => {
 if (e.keyCode === 13) {
  fun1();
  fun2();
 }
}
);