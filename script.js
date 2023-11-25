window.addEventListener("DOMContentLoaded", function () {
  this.window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // HEADER MENU
  const menuBtn = this.document.querySelector(".menu-btn");
  const navigation = this.document.querySelector(".navigation");
  const navigationItems = this.document.querySelectorAll(".navigation a");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });

  navigationItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });

  const scrollBtn = this.document.querySelector(".scrollToTop-btn");
  this.window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", this.window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  });

  this.window.addEventListener("scroll", () => {
    let reveals = this.document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = this.window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 30;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
