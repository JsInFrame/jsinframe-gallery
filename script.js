// Dropdown slide down/up animation
const dropdown = document.querySelector('.dropdown');
const dropbtn = dropdown.querySelector('.dropbtn');
const dropdownContent = dropdown.querySelector('.dropdown-content');

dropbtn.addEventListener('click', e => {
  e.preventDefault();
  dropdown.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxContent = lightbox.querySelector('.lightbox-content');
const closeBtn = lightbox.querySelector('.close');
const videoThumbs = document.querySelectorAll('.video-thumb');
const images = document.querySelectorAll('.gallery img');

function openLightbox(content) {
  lightboxContent.innerHTML = '';
  lightboxContent.appendChild(content);
  lightbox.classList.add('active');
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxContent.innerHTML = '';
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// Open video in iframe lightbox
videoThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const videoUrl = thumb.dataset.video;
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl + '?autoplay=1&rel=0';
    iframe.allow = 'autoplay; fullscreen';
    iframe.allowFullscreen = true;
    iframe.frameBorder = '0';
    openLightbox(iframe);
  });
});

// Open photo in lightbox
images.forEach(img => {
  img.addEventListener('click', () => {
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.alt = img.alt;
    openLightbox(largeImg);
  });
});

// Optional: Parallax effect on hero text
const heroTitle = document.querySelector('.hero-title');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  heroTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
});
