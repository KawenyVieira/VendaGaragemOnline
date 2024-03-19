document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach((carousel, index) => {
      let currentIndex = 0;
      const images = carousel.querySelectorAll('img');
      const totalImages = images.length;
  
      function showImage(index) {
        images.forEach(image => {
          image.style.display = 'none';
        });
        images[index].style.display = 'block';
      }
  
      function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
      }
  
      setInterval(nextImage, 3000); // Change image every 3 seconds
    });
  });
  