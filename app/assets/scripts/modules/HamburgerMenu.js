class HamburgerMenu {
  constructor() {
    this.navMenu = document.getElementById("nav-menu")
    this.navToggle = document.getElementById("nav-toggle")
    this.navClose = document.getElementById("nav-close")

    this.closeNav = document.querySelectorAll('.hamburger-menu__close')
    this.warpEffects  = document.querySelector('.hamburger-menu__circle-bg')
    this.body = document.querySelector('body')
    this.events()
  }

  events() {
    this.navToggle.addEventListener('click', () => {
      this.toggleActive()
    })

    this.closeNav.forEach((el) => {
      el.addEventListener('click', () => this.removeActive())
    })

    this.navClose.addEventListener('click', () => this.removeActive())
  }

  toggleActive() {
    this.navToggle.classList.toggle('site-header__menu-icon--close-x')
    this.navMenu.classList.toggle('hamburger-menu--is-visible')
    this.warpEffects.classList.toggle('hamburger-menu__circle-bg--is-active')
    this.body.classList.toggle('body-no-scroll')
  }

  removeActive() {
    this.navToggle.classList.remove('site-header__menu-icon--close-x')
    this.navMenu.classList.remove('hamburger-menu--is-visible')
    this.warpEffects.classList.remove('hamburger-menu__circle-bg--is-active')
    this.body.classList.remove('body-no-scroll')
  }

}

export default HamburgerMenu;