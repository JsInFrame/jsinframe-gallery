// Lightbox functionality for images and videos
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <div class="lightbox-media"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxMedia = lightbox.querySelector('.lightbox-media');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  // Open lightbox for images
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxMedia.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
      lightbox.classList.add('active');
    });
  });

  // Open lightbox for videos
  document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoURL = thumb.getAttribute('data-video');
      lightboxMedia.innerHTML = `<iframe src="${videoURL}?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>`;
      lightbox.classList.add('active');
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightboxMedia.innerHTML = '';
  });

  // Close on clicking outside content
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      lightboxMedia.innerHTML = '';
    }
  });
});
