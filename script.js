// Dropdown click
document.querySelector('.dropbtn').addEventListener('click', function () {
  this.parentElement.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('show'));
  }
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.close');

// Images
document.querySelectorAll('.grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxContent.innerHTML = `<img src="${img.src}" alt="">`;
  });
});

// Videos
document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const videoSrc = thumb.getAttribute('data-video');
    lightbox.style.display = 'flex';
    lightboxContent.innerHTML = `<iframe width="800" height="450" src="${videoSrc}" frameborder="0" allowfullscreen></iframe>`;
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxContent.innerHTML = '';
});
