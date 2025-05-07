// Horizontal Scroll Event: Scroll content horizontally
let scrollContent = document.getElementById('scrollContent');

scrollContent.addEventListener('wheel', function(event) {
  if (event.deltaY !==0) {
      event.preventDefault();
      scrollContent.scrollLeft += event.deltaY;
  }
}, { passive: false});