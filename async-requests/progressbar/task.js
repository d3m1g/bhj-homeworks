const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let input = form.elements.file;
  let file = input.files[0];
  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
    console.log(event);
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(file);
})