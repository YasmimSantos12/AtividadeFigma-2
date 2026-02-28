const navLinks = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".nav-list");
const navToggle = document.querySelector(".nav-toggle");
const ctaButton = document.getElementById("cta-button");

function setActiveLink(targetId) {
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const id = href && href.startsWith("#") ? href.slice(1) : null;
    if (id === targetId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
      event.preventDefault();
      const sectionId = href.slice(1);
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveLink(sectionId);
      }

      if (navList.classList.contains("open")) {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const waNumber = "5599999999999";
const waMessage = encodeURIComponent(
  "Olá! Tenho interesse nos treinos exclusivos da treine.me."
);
const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    window.open(waLink, "_blank");
    setActiveLink("treinar");
    const trainSection = document.getElementById("treinar");
    if (trainSection) {
      trainSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

