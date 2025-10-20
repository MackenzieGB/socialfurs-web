/* =========================
   MOBILE MENU TOGGLE
========================= */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* =========================
   SMOOTH SCROLL FOR ANCHORS
========================= */
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(navLinks.classList.contains('active')) navLinks.classList.remove('active');
  });
});

/* =========================
   CREATORS CAROUSEL
========================= */
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.arrow.next');
const prevButton = document.querySelector('.arrow.prev');
let slideWidth = slides[0].getBoundingClientRect().width + 24; // 24 = gap
let currentIndex = 0;

const setSlidePosition = () => {
  slides.forEach((slide, index) => {
    slide.style.left = (slideWidth * index) + 'px';
  });
};

setSlidePosition();

const moveToSlide = (index) => {
  track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
};

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  moveToSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentIndex);
});



/* =========================
   FLOATING SHAPES PARALLAX (OPTIONAL)
========================= */
const shapes = document.querySelectorAll('.floating-shapes .shape');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.2;
    shape.style.transform = `translateY(${Math.sin(scrollPos * speed / 50) * 20}px) rotate(${scrollPos * speed / 10}deg)`;
  });
});

/* =========================
   PULSE ANIMATION ADJUSTMENTS
========================= */
const pulseElements = document.querySelectorAll('.cta-button');
setInterval(() => {
  pulseElements.forEach(btn => {
    btn.style.transform = `scale(${1 + Math.random()*0.05})`;
  });
}, 2000);

/* =========================
   RESPONSIVE CAROUSEL ON RESIZE
========================= */
window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width + 24;
  setSlidePosition();
  moveToSlide(currentIndex);
});

// =============================
// MOBILE NAV MENU TOGGLE
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // open/close menu on click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });

  // close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
      body.classList.remove("no-scroll");
    });
  });

  // close menu when window resized beyond mobile
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
      body.classList.remove("no-scroll");
    }
  });
});
