// control navbar bg on scroll
const header = document.querySelector(".header");
const hero = document.querySelector(".hero-section");
const cleen = document.getElementById("cleen");
const navLinks = document.querySelectorAll(".nav-link");
const menuBtn = document.getElementById("menuBtn")
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        // At top: revert to original
        header.classList.remove("blur-full");
        menuBtn.classList.add("text-paper");
        cleen.classList.add("text-paper");
        navLinks.forEach((link) => {
          link.classList.remove("text-dark-blue");
        });
      } else {
        // Scrolled down: dark text
        header.classList.add("blur-full");
        cleen.classList.remove("text-paper");
        menuBtn.classList.remove("text-paper")
        navLinks.forEach((link) => {
          link.classList.add("text-dark-blue");
        });
      }
    });
  },
  {
    threshold: 1.0,
  }
);

if (hero) observer.observe(hero);

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollToTopBtn";
scrollBtn.innerHTML = '<i class="fa fa-arrow-up"></i>';
scrollBtn.style.display = "none";
scrollBtn.className = "scroll-to-top-btn";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Modal popup for CTA button (uses modal in HTML)
const ctaBtn = document.querySelector(".hero-btn");
const modal = document.getElementById("ctaModal");
if (ctaBtn && modal) {
  ctaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  });
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.onclick = closeModal;
  const form = modal.querySelector(".modal-form");
  if (form) {
    form.onsubmit = function (ev) {
      ev.preventDefault();
      closeModal();
      alert("Thank you for signing up!");
    };
  }
}
function closeModal() {
  if (modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }
}

// Animate feature (service) cards on scroll (fade-in)
const featureCards = document.querySelectorAll("#services .grid > div");
const fadeInOnScroll = () => {
  featureCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      card.classList.add("fade-in");
    }
  });
};
window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("DOMContentLoaded", fadeInOnScroll);
