class NavMenu {
  constructor() {
    this.navMenu = document.getElementById("nav-menu")
    this.navToggle = document.getElementById("nav-toggle")
    this.logoEl = document.getElementById("logo-el")
    this.navLinks = document.querySelectorAll("#nav-menu a")
    this.warpEl  = document.getElementById("warp-el")
    this.bodyEl = document.getElementById("body-el")
    this.events()

  }

  events() {
    this.navToggle.addEventListener("click", () => this.toggleNavMenu())

    this.navLinks.forEach(el => {
      el.addEventListener("click", () => this.closeNavMenu())
    })

    this.logoEl.addEventListener("click", () => this.closeNavMenu())
  }

  toggleNavMenu() {
    this.navToggle.classList.toggle('site-header__hamburger-toggle--close-x')
    this.navMenu.classList.toggle('nav-menu--is-visible')
    this.warpEl.classList.toggle('warp-effect--is-active')
    this.bodyEl.classList.toggle('body-no-scroll')
  }

  closeNavMenu() {
    this.navToggle.classList.remove('site-header__hamburger-toggle--close-x')
    this.navMenu.classList.remove('nav-menu--is-visible')
    this.warpEl.classList.remove('warp-effect--is-active')
    this.bodyEl.classList.remove('body-no-scroll')
  }
}

export default NavMenu;