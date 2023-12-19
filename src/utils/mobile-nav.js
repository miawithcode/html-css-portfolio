const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;
  let scrollPosition = 0;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;

    if (isMobileNavOpen) {
      scrollPosition = window.pageYOffset;
      mobileNav.style.display = 'flex';
      mobileNav.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
      document.body.style.top =  `-${scrollPosition}px`;
    }else {
      mobileNav.style.display = 'none';
      mobileNav.style.position = 'absolute';
      document.body.style.overflow = 'auto';
      document.body.style.top = '0';
      window.scrollTo(0, scrollPosition);
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    })
  })
};

export default mobileNav;
