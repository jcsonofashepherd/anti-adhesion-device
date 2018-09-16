function openSidebar() {
  document.getElementById("overlay").style.visibility = "visible";
  document.getElementById("overlay").style.opacity = "1";
  document.getElementById("sidebar").style.width = "240px";
}

function closeSidebar() {
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("overlay").style.opacity = "0";
  document.getElementById("sidebar").style.width = "0";
}

var slideIndex = 1,
    thumbIndex = 1;
showSlides(slideIndex);
showThumbs(thumbIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusThumb(n) {
  showThumbs(thumbIndex += n);
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i,
      slides = document.getElementsByClassName("page-slide"),
      captions = document.getElementsByClassName("slide-caption"),
      thumbs = document.getElementsByClassName("page-thumbnail");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    captions[i].style.display = "none";
    thumbs[i].style.opacity = "1";
  }
  
  slides[slideIndex - 1].style.display = "block";
  captions[slideIndex - 1].style.display = "block";
  thumbs[slideIndex - 1].style.opacity = "0.4";
}

function showThumbs(n) {
  var i,
      thumbs = document.getElementsByClassName("page-thumbnail");
  
  for (i = 0; i < thumbs.length; i++) {
    thumbs[i].style.display = "none";
  }
  
  for (i = 0; i < 3; i++) {
    thumbs[thumbIndex - 1 + i].style.display = "block";
  }
  
  for (i = 0; i < 2; i++) {
    document.getElementsByClassName("carousel-button")[i].style.visibility = "visible";
  }
  
  if (n == 1) {
    document.getElementsByClassName("carousel-button")[0].style.visibility = "hidden";
  }
  
  if (n == thumbs.length - 2) {
    document.getElementsByClassName("carousel-button")[1].style.visibility = "hidden";
  }
}
