// =========================
// NAVIGATION SMOOTH SCROLL
// =========================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// =========================
// ACTIVE NAVIGATION HIGHLIGHT
// =========================
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section");
  const scrollPos = window.scrollY + 200; // Adjust offset for header height

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

// =========================
// HERO SECTION FADE EFFECT
// =========================
window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  if (hero) {
    hero.style.opacity = "0";
    setTimeout(() => {
      hero.style.transition = "opacity 1.5s";
      hero.style.opacity = "1";
    }, 200);
  }
});

// =========================
// PROJECT BUTTONS
// =========================
const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const link = button.getAttribute("href");
    if (link && link !== "#") {
      window.open(link, "_blank"); // Open project in a new tab
    } else {
      alert("Project link will be available soon!");
    }
    e.preventDefault();
  });
});
