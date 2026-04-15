document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(11, 11, 11, 0.98)";
    header.style.padding = "0.5rem 0";
  } else {
    header.style.background = "rgba(11, 11, 11, 0.95)";
    header.style.padding = "1rem 0";
  }
});

// Portfolio Swiper
document.addEventListener("DOMContentLoaded", function () {
  const swiperScript = document.createElement("script");
  swiperScript.src =
    "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
  document.head.appendChild(swiperScript);

  swiperScript.onload = function () {
    const swiper = new Swiper(".portfolio-swiper", {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 300,
        modifier: 1.5,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        480: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 1.8,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2.2,
          spaceBetween: 40,
        },
      },
    });
  };
});
