document.addEventListener("DOMContentLoaded", () => {
  const navBarDesktop = document.getElementById("desktop");
  const navBarMobile = document.getElementById("mobile");

  function toggleNavigation() {
    console.log("Resolução atual: ", window.innerWidth);
    if (window.innerWidth <= 770) {
      navBarDesktop.style.display = "none";
      navBarMobile.style.display = "flex";
    } else {
      navBarDesktop.style.display = "flex";
      navBarMobile.style.display = "none";
    }
  }

  toggleNavigation();

  window.addEventListener("resize", toggleNavigation);
});
