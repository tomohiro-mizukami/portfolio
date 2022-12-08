/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/***/ (() => {

eval("/* 🍔 Menu */\nclass Nav {\n  constructor() {\n    this.openNav = document.querySelector('.openbtn')\n    this.closeNav = document.querySelectorAll('.nav__link')\n    this.nav = document.querySelector('#g-nav')\n    this.warpEffects  = document.querySelector('.circle-bg')\n    this.body = document.querySelector('body')\n    this.events()\n  }\n\n  events() {\n    this.openNav.addEventListener('click', () => {\n      this.addActive()\n    })\n\n    this.closeNav.forEach((el) => {\n      el.addEventListener('click', () => { \n        this.removeActive()\n      })\n    })\n  }\n\n  addActive() {\n    this.openNav.classList.toggle('active')\n    this.nav.classList.toggle('panelactive')\n    this.warpEffects.classList.toggle('circleactive')\n    this.body.classList.toggle('body-no-scroll')\n  }\n\n  removeActive() {\n    this.openNav.classList.remove('active')\n    this.nav.classList.remove('panelactive')\n    this.warpEffects.classList.remove('circleactive')\n    this.body.classList.remove('body-no-scroll')\n  }\n\n}\n\n\n/* Swiper */\nconst swiper = new Swiper('.swiper', {\n  // Optional parameters\n    spaceBetween: 30,\n      loop: true,\n      autoplay: {\n          delay: 5000,\n      },\n\n      // If we need pagination\n      pagination: {\n          el: '.swiper-pagination',\n  },\n});\n\n\n/* Google Forms iframe */\nlet submitted = false\nconst iframe = document.getElementById(\"hidden_iframe\")\n\niframe.onload = () => {\n  if(submitted) {\n    window.location='thankyou.html'\n  }\n}\n\n\nclass Form {\n  // 1. describe and create/initiate our object\n  constructor() {\n    this.nameField = document.querySelector(\"#name\")\n    this.emailField = document.querySelector(\"#email\")\n    this.textareaField = document.querySelector(\"#textarea\")\n    this.pattern = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n    this.nameIndicator = document.querySelector(\"#name-indicator\")\n    this.emailIndicator = document.querySelector(\"#email-indicator\")\n    this.textareaIndicator = document.querySelector(\"#textarea-indicator\")\n    this.submit = document.querySelector(\"#submit\")\n    this.typingTimer\n    this.events() // event listeners get added to the page right away\n  }\n\n  // 2. events\n  events() {\n    this.nameField.addEventListener(\"keyup\", () => this.typingLogic())\n    this.emailField.addEventListener(\"keydown\", () => this.typingLogic())\n    this.textareaField.addEventListener(\"keyup\", () => this.typingLogic())\n  }\n\n  // 3. methods (function, action...)\n  typingLogic() {\n    clearTimeout(this.typingTimer)\n    this.typingTimer = setTimeout(() => this.validate(), 500)\n  }\n\n  validate() {\n    if (this.emailField.value.match(this.pattern)) {\n      this.emailField.nextElementSibling.classList.add(\"valid\")\n    } else {\n      this.emailField.nextElementSibling.classList.remove(\"valid\")\n    }\n\n    if (this.nameField.value !== '') {\n      this.nameField.nextElementSibling.classList.add(\"valid\")\n    } else {\n      this.nameField.nextElementSibling.classList.remove(\"valid\")\n    }\n\n    if (this.textareaField.value !== '') {\n      this.textareaField.nextElementSibling.classList.add(\"valid\")\n    } else {\n      this.textareaField.nextElementSibling.classList.remove(\"valid\")\n    }\n\n    if(\n      this.nameIndicator.classList.contains(\"valid\") &&\n      this.emailIndicator.classList.contains(\"valid\") &&\n      this.textareaIndicator.classList.contains(\"valid\")\n      ) {\n        console.log(\"submit\")\n      this.submit.removeAttribute(\"disabled\")\n      this.submit.innerHTML = \"送信\"\n    } else {\n      this.submit.setAttribute(\"disabled\", \"\")\n      this.submit.innerHTML = \"↑&nbsp;ご入力待ち...\"\n    }\n  }\n}\n\nconst nav = new Nav()\nconst form = new Form()\n\n\n//# sourceURL=webpack://portfolio/./app/assets/scripts/App.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/assets/scripts/App.js"]();
/******/ 	
/******/ })()
;