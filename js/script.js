// swiper
// there isn't a element with the id #myCarousel
// const carousel = new bootstrap.Carousel('#myCarousel')
// Pop up form

function toggleForm(id) {
  const El = document.getElementById(id);
  // check if 'form' is open 
  if (El.style.display == '' || El.style.display == 'none') {
    // 'form' not open
    El.style.display = 'block';
  } else {
    El.style.display = 'none';
  }
}
