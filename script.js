function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && window.scrollY > 0) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  });
}

const options = {
  root: null,
  rootMargin: "-50px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(document.querySelector(".container-nav-hero"));
observer.observe(document.querySelector(".featured-in"));

window.addEventListener("load", () => {
  function toggleSticky() {
    if (window.scrollY > 900) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  }

  toggleSticky();

  window.addEventListener("scroll", toggleSticky);
});
