//for corusel-1//
let offset1 = 0;
const slides = document.querySelector('.slides');
document.querySelector('.next').addEventListener('click', function () {
   offset1 = offset1 + 405;
   if (offset1 > 1215) {
      offset1 = 0;
   }
   slides.style.left = -offset1 + 'px';
});
document.querySelector('.prev').addEventListener('click', function () {
   offset1 = offset1 - 405;
   if (offset1 < 0) {
      offset1 = 1215;
   }
   slides.style.left = -offset1 + 'px';
});
//for corusel-2
let offset2 = 0;
const slides2 = document.querySelector('.slides2');
document.querySelector('.next2').addEventListener('click', function () {
   offset2 = offset2 + 410;
   if (offset2 > 410) {
      offset2 = 0;
   }
   slides2.style.left = -offset2 + 'px';
});
document.querySelector('.prev2').addEventListener('click', function () {
   offset2 = offset2 - 410;
   if (offset2 < 0) {
      offset2 = 410;
   }
   slides2.style.left = -offset2 + 'px';
});