gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.fromTo(
  ".header-text",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
  0.5
)
  .fromTo(
    ".header-box",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    0.8
  )
  .fromTo(
    ".header-btn-1",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    1
  )
  .fromTo(
    ".header-btn-2",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    1.2
  )
  .fromTo(
    ".diagrama",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    1.4
  )
  .fromTo(
    ".header-logo",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    1.6
  )
  .fromTo(
    ".header-list li",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
    1.8
  )
  .fromTo(
    ".header-btn-3",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    2.8
  )
  .fromTo(
    ".abs-text",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 },
    1.6
  )
  .fromTo(
    ".burger-menu",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    1.8
  );

gsap.to(".header-hero", {
  scrollTrigger: {
    trigger: ".header",
    start: "center top",
    scrub: 1,
  },
  opacity: 0,
  y: -200,
});

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  gsap.fromTo(
    ".menu-mob-hidden",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8 }
  );
  overlay.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  gsap.to(mobileMenu, {
    x: 100,
    opacity: 0,
    duration: 0.6,
    onComplete: () => {
      console.log("Animation complete");
      mobileMenu.classList.add("hidden");
      overlay.classList.add("hidden");
      gsap.set(".menu-mob-hidden", { x: 0, opacity: 1 });
    },
  });
});

overlay.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target)) {
    gsap.to(mobileMenu, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        mobileMenu.classList.add("hidden");
        overlay.classList.add("hidden");
        gsap.set(mobileMenu, { x: 0, opacity: 1 });
      },
    });
  }
});

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-content').style.maxHeight = null;

      const symbol = i.querySelector('.accordion-symbol');
      const text = i.querySelector('.accordion-text');
      if (symbol) {
        symbol.style.transform = 'rotate(0deg)';
        symbol.style.color = '';
      }
      if (text) text.style.color = '';
    });

    if (!isActive) {
      item.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';

      const symbol = item.querySelector('.accordion-symbol');
      const text = item.querySelector('.accordion-text');
      if (symbol) {
        symbol.style.transform = 'rotate(45deg)';
        symbol.style.color = 'var(--lingth-green)';
      }
      if (text) text.style.color = 'var(--lingth-green)';
    }
  });
});