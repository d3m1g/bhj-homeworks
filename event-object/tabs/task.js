const menuElement = document.querySelectorAll('.tab');
const elementContent = document.querySelectorAll('.tab__content');

const arrayOfElements = Array.from(menuElement);
const arrayOfContents = Array.from(elementContent);

arrayOfElements.forEach((element, index) => {
 element.onclick = function() {
  let lastIndex = arrayOfElements.findIndex(e => e.classList.contains("tab_active"));
  arrayOfElements[lastIndex].classList.remove('tab_active');
  arrayOfContents[lastIndex].classList.remove('tab__content_active');
  element.classList.add('tab_active');
  arrayOfContents[index].classList.add('tab__content_active');
 }
});