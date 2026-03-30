(function () {
  document.documentElement.classList.add("js");

  const yearTarget = document.getElementById("current-year");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });
  }
})();
