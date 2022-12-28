// core version + pagination, autoplay modules:
import Swiper, { Pagination, Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/styles.css';

if (module.hot) {
  module.hot.accept()
}

/* 🍔 Menu */
class Nav {
  constructor() {
    this.openNav = document.querySelector('.openbtn')
    this.closeNav = document.querySelectorAll('.nav__link')
    this.nav = document.querySelector('#g-nav')
    this.warpEffects  = document.querySelector('.circle-bg')
    this.body = document.querySelector('body')
    this.events()
  }

  events() {
    this.openNav.addEventListener('click', () => {
      this.addActive()
    })

    this.closeNav.forEach((el) => {
      el.addEventListener('click', () => { 
        this.removeActive()
      })
    })
  }

  addActive() {
    this.openNav.classList.toggle('active')
    this.nav.classList.toggle('panelactive')
    this.warpEffects.classList.toggle('circleactive')
    this.body.classList.toggle('body-no-scroll')
  }

  removeActive() {
    this.openNav.classList.remove('active')
    this.nav.classList.remove('panelactive')
    this.warpEffects.classList.remove('circleactive')
    this.body.classList.remove('body-no-scroll')
  }

}


/* Swiper */
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination, Autoplay],

  // Optional parameters
  spaceBetween: 30,
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


class Form {
  // 1. describe and create/initiate our object
  constructor() {
    this.nameField = document.querySelector("#name")
    this.emailField = document.querySelector("#email")
    this.textareaField = document.querySelector("#textarea")
    this.pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.nameIndicator = document.querySelector("#name-indicator")
    this.emailIndicator = document.querySelector("#email-indicator")
    this.textareaIndicator = document.querySelector("#textarea-indicator")
    this.submit = document.querySelector("#submit")
    this.typingTimer
    this.events() // event listeners get added to the page right away
  }

  // 2. events
  events() {
    this.nameField.addEventListener("keyup", () => this.typingLogic())
    this.emailField.addEventListener("keydown", () => this.typingLogic())
    this.textareaField.addEventListener("keyup", () => this.typingLogic())
  }

  // 3. methods (function, action...)
  typingLogic() {
    clearTimeout(this.typingTimer)
    this.typingTimer = setTimeout(() => this.validate(), 500)
  }

  validate() {
    if (this.emailField.value.match(this.pattern)) {
      this.emailField.nextElementSibling.classList.add("is-valid")
    } else {
      this.emailField.nextElementSibling.classList.remove("is-valid")
    }

    if (this.nameField.value !== '') {
      this.nameField.nextElementSibling.classList.add("is-valid")
    } else {
      this.nameField.nextElementSibling.classList.remove("is-valid")
    }

    if (this.textareaField.value !== '') {
      this.textareaField.nextElementSibling.classList.add("is-valid")
    } else {
      this.textareaField.nextElementSibling.classList.remove("is-valid")
    }

    if(
      this.nameIndicator.classList.contains("is-valid") &&
      this.emailIndicator.classList.contains("is-valid") &&
      this.textareaIndicator.classList.contains("is-valid")
      ) {
        console.log("submit")
      this.submit.removeAttribute("disabled")
      this.submit.innerHTML = "送信"
    } else {
      this.submit.setAttribute("disabled", "")
      this.submit.innerHTML = "↑&nbsp;ご入力待ち..."
    }
  }
}

const nav = new Nav()
const form = new Form()
