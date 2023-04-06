const sliderItem = Array.from(document.querySelectorAll("div.slider__item"));
let sliderNumber = 0;

const sliderArrow = document.getElementsByClassName("slider__arrow");
const arrowLeft = sliderArrow[0];
const arrowRight = sliderArrow[1];

const dots = Array.from(document.querySelectorAll('div.slider__dot'));


function number() {
 sliderNumber = (sliderNumber + sliderItem.length) % sliderItem.length;
}

function showPic() {
 sliderItem[sliderNumber].className = "slider__item slider__item_active";
 dots[sliderNumber].className = "slider__dot slider__dot_active";
}

function hidePic() {
 sliderItem[sliderNumber].className = "slider__item";
 dots[sliderNumber].className = "slider__dot";
}

arrowRight.onclick = () => {
 hidePic();
 sliderNumber++;
 number();
 showPic();
}

arrowLeft.onclick = () => {
 hidePic();
 sliderNumber--;
 number();
 showPic();
}


dots.forEach((e, i) => {
 e.onclick = () => {
  hidePic()
  sliderNumber = i;
  showPic();
 }
})
