var slide = 1;
showSlides1(slide);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slide += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slide = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {slide = 1} 
  if (n < 1) {slide = slides1.length}
  for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slide-1].style.display = "block"; 
  dots[slide-1].className += " active";
}