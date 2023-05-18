const book = document.getElementById("book");
const fontSize = Array.from(document.querySelectorAll(".font-size"));

fontSize.forEach(ele => {
 ele.addEventListener('click', (element) => {
  element.preventDefault();
  let previousIndex = fontSize.findIndex(e => e.classList.contains('font-size_active'));
  fontSize[previousIndex].classList.remove('font-size_active');
  ele.classList.add('font-size_active');
  book.classList.remove('book_fs-small', 'book_fs-big');
  book.classList.add(`book_fs-${ele.dataset.size}`);
 });
});