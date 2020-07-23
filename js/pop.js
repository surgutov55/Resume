var img = document.querySelectorAll('.click'),
  backPop = document.getElementById('backPop'),
  popUp = document.getElementById('popUp'),
  bigImg = document.getElementById('bigImg'),
  inRight = document.getElementById('inRight'),
  nextSrc,next;
for (var i=0;i<img.length;i++){
    img[i].setAttribute('data-value',i)
};
[].forEach.call(img, function(elem) {
  var src = elem.getAttribute('src');
  elem.onclick = function() {
      next = elem;
  console.log(next);
    backPop.style.display = 'block';
    backPop.classList.remove('fadeOut');
    backPop.classList.add('fadeIn');
    bigImg.setAttribute('src', src);

  }
  inRight.onclick = function() {
    var src = bigImg.getAttribute('src');
    nextElem = next.nextElementSibling;
    console.log(nextElem);
    nextSrc = nextElem.getAttribute('src');
    if (nextSrc == src) {
      nextNextElem = nextElem.nextElementSibling
       nextNextElemSrc = nextNextElem.getAttribute('src');
      bigImg.setAttribute('src', nextNextElemSrc);
      if(nextNextElem.getAttribute('data-value')>=(img.length-1)){
        srcNext = next.getAttribute('src');
        bigImg.setAttribute('src',srcNext);
      }

    } else bigImg.setAttribute('src', nextSrc);

  }
});

backPop.onclick = function(elem) {
  if (!(elem.target.closest("#popUp"))) {
    backPop.classList.add('fadeOut');
    setTimeout(function() {
      backPop.style.display = 'none'
    }, 300);

  }
}