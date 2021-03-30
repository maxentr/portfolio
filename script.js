// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
 (function scrollSpy() {
  const targets = document.querySelectorAll(".section"),
   options = {
    threshold: 0.35
   };
  // If IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
   (() => {
    const inView = target => {
     const interSecObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
       const elem = entry.target;
       let currentNav = document.querySelector(
        `#nav a[href='#${elem.id}']`
       );
       entry.isIntersecting
        ? currentNav.classList.add("active")
        : currentNav.classList.remove("active");
      });
     }, options);
     interSecObs.observe(target);
    };
    targets.forEach(inView);
   })();
  }
 })();
});
