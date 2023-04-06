const modalMain = document.getElementById('modal_main');
const makeGood = document.querySelector("a.show-success");
const modalSuccess = document.getElementById('modal_success');
const closeButton = document.getElementsByClassName('modal__close modal__close_times');

modalMain.className = "modal modal_active";

makeGood.onclick = () => {
 if (modalMain.className === "modal modal_active") {
  modalSuccess.className = "modal modal_active";
  modalMain.className = "modal";
 }
}

for (let i = 0; i < closeButton.length; i++) {
 closeButton[i].onclick = () => {
  modalSuccess.className = "modal";
  modalMain.className = "modal";
 }
}