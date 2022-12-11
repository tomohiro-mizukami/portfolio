/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./app/assets/styles/styles.css\");\n\n\n/* 🍔 Menu */\nclass Nav {\n  constructor() {\n    this.openNav = document.querySelector('.openbtn')\n    this.closeNav = document.querySelectorAll('.nav__link')\n    this.nav = document.querySelector('#g-nav')\n    this.warpEffects  = document.querySelector('.circle-bg')\n    this.body = document.querySelector('body')\n    this.events()\n  }\n\n  events() {\n    this.openNav.addEventListener('click', () => {\n      this.addActive()\n    })\n\n    this.closeNav.forEach((el) => {\n      el.addEventListener('click', () => { \n        this.removeActive()\n      })\n    })\n  }\n\n  addActive() {\n    this.openNav.classList.toggle('active')\n    this.nav.classList.toggle('panelactive')\n    this.warpEffects.classList.toggle('circleactive')\n    this.body.classList.toggle('body-no-scroll')\n  }\n\n  removeActive() {\n    this.openNav.classList.remove('active')\n    this.nav.classList.remove('panelactive')\n    this.warpEffects.classList.remove('circleactive')\n    this.body.classList.remove('body-no-scroll')\n  }\n\n}\n\n\n/* Swiper */\nconst swiper = new Swiper('.swiper', {\n  // Optional parameters\n    spaceBetween: 30,\n      loop: true,\n      autoplay: {\n          delay: 5000,\n      },\n\n      // If we need pagination\n      pagination: {\n          el: '.swiper-pagination',\n  },\n});\n\n\n/* Google Forms iframe */\nlet submitted = false\nconst iframe = document.getElementById(\"hidden_iframe\")\n\niframe.onload = () => {\n  if(submitted) {\n    window.location='thankyou.html'\n  }\n}\n\n\nclass Form {\n  // 1. describe and create/initiate our object\n  constructor() {\n    this.nameField = document.querySelector(\"#name\")\n    this.emailField = document.querySelector(\"#email\")\n    this.textareaField = document.querySelector(\"#textarea\")\n    this.pattern = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n    this.nameIndicator = document.querySelector(\"#name-indicator\")\n    this.emailIndicator = document.querySelector(\"#email-indicator\")\n    this.textareaIndicator = document.querySelector(\"#textarea-indicator\")\n    this.submit = document.querySelector(\"#submit\")\n    this.typingTimer\n    this.events() // event listeners get added to the page right away\n  }\n\n  // 2. events\n  events() {\n    this.nameField.addEventListener(\"keyup\", () => this.typingLogic())\n    this.emailField.addEventListener(\"keydown\", () => this.typingLogic())\n    this.textareaField.addEventListener(\"keyup\", () => this.typingLogic())\n  }\n\n  // 3. methods (function, action...)\n  typingLogic() {\n    clearTimeout(this.typingTimer)\n    this.typingTimer = setTimeout(() => this.validate(), 500)\n  }\n\n  validate() {\n    if (this.emailField.value.match(this.pattern)) {\n      this.emailField.nextElementSibling.classList.add(\"valid\")\n    } else {\n      this.emailField.nextElementSibling.classList.remove(\"valid\")\n    }\n\n    if (this.nameField.value !== '') {\n      this.nameField.nextElementSibling.classList.add(\"valid\")\n    } else {\n      this.nameField.nextElementSibling.classList.remove(\"valid\")\n    }\n\n    if (this.textareaField.value !== '') {\n      this.textareaField.nextElementSibling.classList.add(\"valid\")\n    } else {\n      this.textareaField.nextElementSibling.classList.remove(\"valid\")\n    }\n\n    if(\n      this.nameIndicator.classList.contains(\"valid\") &&\n      this.emailIndicator.classList.contains(\"valid\") &&\n      this.textareaIndicator.classList.contains(\"valid\")\n      ) {\n        console.log(\"submit\")\n      this.submit.removeAttribute(\"disabled\")\n      this.submit.innerHTML = \"送信\"\n    } else {\n      this.submit.setAttribute(\"disabled\", \"\")\n      this.submit.innerHTML = \"↑&nbsp;ご入力待ち...\"\n    }\n  }\n}\n\nconst nav = new Nav()\nconst form = new Form()\n\n\n//# sourceURL=webpack://portfolio/./app/assets/scripts/App.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app/assets/styles/styles.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app/assets/styles/styles.css ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! destyle.css v4.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.css */\\n\\n/* Reset box-model and set borders */\\n\\n/* ============================================ */\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  border-style: solid;\\n  border-width: 0;\\n}\\n\\n/* Document */\\n\\n/* ============================================ */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n * 3. Remove gray overlay on links for iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -webkit-tap-highlight-color: transparent; /* 3*/\\n}\\n\\n/* Sections */\\n\\n/* ============================================ */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/* Vertical rhythm */\\n\\n/* ============================================ */\\n\\np,\\ntable,\\nblockquote,\\naddress,\\npre,\\niframe,\\nform,\\nfigure,\\ndl {\\n  margin: 0;\\n}\\n\\n/* Headings */\\n\\n/* ============================================ */\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n  margin: 0;\\n}\\n\\n/* Lists (enumeration) */\\n\\n/* ============================================ */\\n\\nul,\\nol {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n/* Lists (definition) */\\n\\n/* ============================================ */\\n\\ndt {\\n  font-weight: bold;\\n}\\n\\ndd {\\n  margin-left: 0;\\n}\\n\\n/* Grouping content */\\n\\n/* ============================================ */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n  border-top-width: 1px;\\n  margin: 0;\\n  clear: both;\\n  color: inherit;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: inherit; /* 2 */\\n}\\n\\naddress {\\n  font-style: inherit;\\n}\\n\\n/* Text-level semantics */\\n\\n/* ============================================ */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  -webkit-text-decoration: underline dotted;\\n          text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: inherit; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Replaced content */\\n\\n/* ============================================ */\\n\\n/**\\n * Prevent vertical alignment issues.\\n */\\n\\nsvg,\\nimg,\\nembed,\\nobject,\\niframe {\\n  vertical-align: bottom;\\n}\\n\\n/* Forms */\\n\\n/* ============================================ */\\n\\n/**\\n * Reset form fields to make them styleable.\\n * 1. Make form elements stylable across systems iOS especially.\\n * 2. Inherit text-transform from parent.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  -webkit-appearance: none; /* 1 */\\n  -moz-appearance: none;\\n       appearance: none;\\n  vertical-align: middle;\\n  color: inherit;\\n  font: inherit;\\n  background: transparent;\\n  padding: 0;\\n  margin: 0;\\n  border-radius: 0;\\n  text-align: inherit;\\n  text-transform: inherit; /* 2 */\\n}\\n\\n/**\\n * Correct cursors for clickable elements.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  cursor: pointer;\\n}\\n\\nbutton:disabled,\\n[type=\\\"button\\\"]:disabled,\\n[type=\\\"reset\\\"]:disabled,\\n[type=\\\"submit\\\"]:disabled {\\n  cursor: default;\\n}\\n\\n/**\\n * Improve outlines for Firefox and unify style with input elements & buttons.\\n */\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\nselect:disabled {\\n  opacity: inherit;\\n}\\n\\n/**\\n * Remove padding\\n */\\n\\noption {\\n  padding: 0;\\n}\\n\\n/**\\n * Reset to invisible\\n */\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n  min-width: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  outline-offset: -2px; /* 1 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Fix font inheritance.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/**\\n * Fix appearance for Firefox\\n */\\n\\n[type=\\\"number\\\"] {\\n  -moz-appearance: textfield;\\n}\\n\\n/**\\n * Clickable labels\\n */\\n\\nlabel[for] {\\n  cursor: pointer;\\n}\\n\\n/* Interactive */\\n\\n/* ============================================ */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\n * Remove outline for editable content.\\n */\\n\\n[contenteditable]:focus {\\n  outline: auto;\\n}\\n\\n/* Tables */\\n\\n/* ============================================ */\\n\\n/**\\n1. Correct table border color inheritance in all Chrome and Safari.\\n*/\\n\\ntable {\\n  border-color: inherit; /* 1 */\\n  border-collapse: collapse;\\n}\\n\\ncaption {\\n  text-align: left;\\n}\\n\\ntd,\\nth {\\n  vertical-align: top;\\n  padding: 0;\\n}\\n\\nth {\\n  text-align: left;\\n  font-weight: bold;\\n}\\n\\n:root {\\n  --text: #000;\\n  --bg: #fff;\\n  --placeholder: #757575;\\n  --text-field: #000;\\n  --bg-name: #f5f5f5;\\n  --bg-email: #f0f0f0;\\n  --bg-textarea: #e0e0e0;\\n  --text-btn: #fff;\\n  --bg-btn: #000;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --text: #ddd;\\n    --bg: #000;\\n    --placeholder: #bebebe;\\n    --text-field: #fff;\\n    --bg-name: #222;\\n    --bg-email: #222;\\n    --bg-textarea: #222;\\n    --text-btn: #000;\\n    --bg-btn: #fff;\\n  }\\n}\\n\\nbody {\\n  font-family: \\\"Lato\\\", -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \\\"Helvetica Neue\\\", sans-serif;\\n  color: var(--text);\\n  background-color: var(--bg);\\n}\\n\\na {\\n  color: var(--text);\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.container {\\n  /* スクロールスナップの設定 */\\n  overflow: auto;\\n  scroll-snap-type: y mandatory;\\n  height: 100vh;\\n}\\n\\n.area {\\n  /* テキストを画面中央に表示 */\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  /* スクロールスナップの設定 */\\n  scroll-snap-align: start;\\n  height: 100vh;\\n}\\n\\n.dib {\\n  display: inline-block;\\n}\\n\\n.uppercase {\\n  text-transform: uppercase;\\n}\\n\\n.logo {\\n  position: fixed;\\n  top: 2vh;\\n  left: 2vw;\\n  z-index: 998;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 3.125rem;\\n  height: 3.125rem;\\n  font-size: 1.75rem;\\n}\\n\\n@media (min-width: 36em) {\\n  .logo {\\n    font-size: 2.25rem;\\n  }\\n}\\n\\n@media (min-width: 48em) {\\n  .logo {\\n    font-size: 2.5rem;\\n  }\\n}\\n\\n/*========= ナビゲーションのためのCSS ===============*/\\n\\n/*アクティブになったエリア*/\\n\\n.nav {\\n  display: none;\\n}\\n\\n.nav.panelactive {\\n  display: block;\\n  /*position:fixed;にし、z-indexの数値を大きくして前面へ*/\\n  position: fixed;\\n  z-index: 999;\\n  top: 0;\\n  width: 100%;\\n  height: 100vh;\\n  /*ナビゲーションの背景色*/\\n  animation-name: gnaviAnime;\\n  animation-duration: 1s;\\n  animation-delay: 0.2s;\\n  animation-fill-mode: forwards;\\n  opacity: 0;\\n  background-color: var(--bg);\\n}\\n\\n/*丸の拡大*/\\n\\n.circle-bg {\\n  position: fixed;\\n  z-index: 3;\\n  /*丸の形*/\\n  width: 100px;\\n  height: 100px;\\n  border-radius: 50%;\\n  /*丸のスタート位置と形状*/\\n  transform: scale(0);\\n  /*scaleをはじめは0に*/\\n  top: calc(50% - 50px);\\n  /*50%から円の半径を引いた値*/\\n  left: calc(50% - 50px);\\n  /*50%から円の半径を引いた値*/\\n  transition: all 0.6s;\\n  /*0.6秒かけてアニメーション*/\\n  /*ボーダーでワープみたいな演出*/\\n  border: 2px dashed var(--text);\\n}\\n\\n.circle-bg.circleactive {\\n  transform: scale(50);\\n  /*クラスが付与されたらscaleを拡大*/\\n}\\n\\n/*ナビゲーション*/\\n\\n.nav__list {\\n  opacity: 0;\\n  /*はじめは透過0*/\\n  /*ナビゲーション天地中央揃え※レイアウトによって調整してください。不必要なら削除*/\\n  position: absolute;\\n  z-index: 999;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n/*背景が出現後にナビゲーションを表示*/\\n\\n.nav.panelactive .nav__list {\\n  opacity: 1;\\n}\\n\\n/* 背景が出現後にナビゲーション li を表示※レイアウトによって調整してください。不必要なら削除*/\\n\\n.nav.panelactive .nav__item {\\n  animation-name: gnaviAnime;\\n  animation-duration: 1s;\\n  animation-delay: 0.2s;\\n  /*0.2 秒遅らせて出現*/\\n  animation-fill-mode: forwards;\\n  opacity: 0;\\n}\\n\\n@keyframes gnaviAnime {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n.nav__link {\\n  display: block;\\n  font-family: \\\"Oswald\\\", sans-serif;\\n  font-size: 1.75rem;\\n  font-weight: 600;\\n  letter-spacing: 0.2em;\\n  color: var(--text);\\n  text-transform: uppercase;\\n  padding: 1.5625rem;\\n}\\n\\n@media (min-width: 37.5em) {\\n  .nav__link {\\n    font-size: 2.1875rem;\\n  }\\n}\\n\\n/*========= ボタンのためのCSS ===============*/\\n\\n.openbtn {\\n  position: fixed;\\n  top: 2vh;\\n  right: 2vw;\\n  z-index: 9999;\\n  /*ボタンを最前面に*/\\n  cursor: pointer;\\n  width: 50px;\\n  height: 50px;\\n}\\n\\n/*×に変化*/\\n\\n.openbtn span {\\n  display: inline-block;\\n  transition: all 0.4s;\\n  position: absolute;\\n  left: 14px;\\n  height: 3px;\\n  border-radius: 2px;\\n  background-color: var(--text);\\n  width: 45%;\\n}\\n\\n.openbtn span:nth-of-type(1) {\\n  top: 15px;\\n}\\n\\n.openbtn span:nth-of-type(2) {\\n  top: 23px;\\n}\\n\\n.openbtn span:nth-of-type(3) {\\n  top: 31px;\\n}\\n\\n.openbtn.active span:nth-of-type(1) {\\n  top: 18px;\\n  left: 18px;\\n  transform: translateY(6px) rotate(-45deg);\\n  width: 30%;\\n}\\n\\n.openbtn.active span:nth-of-type(2) {\\n  opacity: 0;\\n}\\n\\n.openbtn.active span:nth-of-type(3) {\\n  top: 30px;\\n  left: 18px;\\n  transform: translateY(-6px) rotate(45deg);\\n  width: 30%;\\n}\\n\\n.body-no-scroll {\\n  overflow: hidden;\\n}\\n\\n.hero {\\n  padding: 0 1.25rem;\\n  text-align: center;\\n}\\n\\n.hero__name {\\n  font-family: \\\"Oswald\\\", sans-serif;\\n  font-size: 2.8125rem;\\n  line-height: 1.2;\\n  letter-spacing: 0.15em;\\n  margin-bottom: 0.9375rem;\\n}\\n\\n.hero__title {\\n  font-size: 0.8125rem;\\n  letter-spacing: 0.25em;\\n}\\n\\n@media (min-width: 37.5em) {\\n  .hero__name {\\n    font-size: clamp(2.8125rem, 7vw, 5rem);\\n    margin-bottom: 1.25rem;\\n  }\\n  .hero__title {\\n    font-size: 1.25rem;\\n  }\\n}\\n\\n.about__body {\\n  margin: 0 auto;\\n}\\n\\n.about__img {\\n  display: block;\\n  width: 6.25rem;\\n  margin: 0 auto 1.875rem;\\n  border-radius: 50%;\\n  border: 2px solid var(--text);\\n}\\n\\n.about__desc {\\n  width: 83.3333%;\\n  margin: 0 auto;\\n  font-size: 1.0625rem;\\n  font-weight: 600;\\n  line-height: 1.4em;\\n  letter-spacing: 0.3em;\\n}\\n\\n@media (min-width: 23.4375em) {\\n  .about__desc {\\n    width: 75%;\\n  }\\n}\\n\\n@media (min-width: 37.5em) {\\n  .about__body {\\n    display: grid;\\n    grid-template-columns: auto 1fr;\\n    gap: clamp(3.125rem, 8vw, 5rem);\\n    text-align: left;\\n  }\\n  .about__img {\\n    width: clamp(6.25em, 13vw, 8.125rem);\\n    margin: 0;\\n  }\\n  .about__desc {\\n    width: clamp(21.875rem, 50vw, 31.25rem);\\n    font-size: clamp(1.0625rem, 2.5vw, 1.5625rem);\\n    line-height: 1.2em;\\n  }\\n}\\n\\n.swiper-slide__picture {\\n  margin: 0 auto 0.625rem;\\n  border: 1px solid #d2d5d9;\\n  overflow: hidden;\\n  display: block;\\n  margin-bottom: 0.625rem;\\n}\\n\\n.swiper-slide__title {\\n  font-size: 1.375rem;\\n  font-weight: 700;\\n  line-height: 44px;\\n  letter-spacing: 0.3em;\\n  text-align: center;\\n  margin-bottom: 0.625rem;\\n}\\n\\n.swiper-slide__desc {\\n  width: 83.3333%;\\n  margin: 0 auto 2.8125rem;\\n  font-size: 0.9375rem;\\n  line-height: 25px;\\n  letter-spacing: 0.3em;\\n  text-align: center;\\n}\\n\\n.swiper {\\n  max-width: 21.875rem;\\n  width: 87.5%;\\n  margin: 0 auto;\\n}\\n\\n.swiper-pagination-bullet-active {\\n  background: #000;\\n}\\n\\n@media (min-width: 30em) {\\n  .swiper {\\n    max-width: 31.25rem;\\n    width: 75%;\\n  }\\n}\\n\\n@media (min-width: 48em) {\\n  .swiper-slide__title {\\n    font-size: 1.5625rem;\\n  }\\n  .swiper-slide__desc {\\n    width: 75%;\\n    font-size: 1.0625rem;\\n    line-height: 23px;\\n  }\\n  .swiper {\\n    max-width: 37.5rem;\\n  }\\n}\\n\\n@media (min-width: 64em) {\\n  .swiper-slide__picture {\\n    margin-bottom: 1.25rem;\\n  }\\n  .swiper-slide__title {\\n    font-size: 2.5rem;\\n  }\\n  .swiper {\\n    max-width: 40.625rem;\\n  }\\n}\\n\\n.hidden-iframe {\\n  display: none;\\n}\\n\\n.form {\\n  width: 75%;\\n  margin: 0 auto;\\n}\\n\\n.form-fields {\\n  width: 100%;\\n  max-width: 25rem;\\n  margin: 0 auto;\\n}\\n\\n.form-field {\\n  margin-bottom: 1.25rem;\\n}\\n\\n.form-field input,\\n.form-field textarea {\\n  width: 100%;\\n  padding: 10px 45px 10px 20px;\\n  font-size: 16px;\\n  color: var(--text-field);\\n  resize: vertical;\\n}\\n\\n.form-field input::-moz-placeholder, .form-field textarea::-moz-placeholder {\\n  font-size: 0.875rem;\\n  font-weight: 400;\\n  letter-spacing: 0.2em;\\n  color: var(--placeholder);\\n}\\n\\n.form-field input::placeholder,\\n.form-field textarea::placeholder {\\n  font-size: 0.875rem;\\n  font-weight: 400;\\n  letter-spacing: 0.2em;\\n  color: var(--placeholder);\\n}\\n\\n.form-field input {\\n  height: 50px;\\n}\\n\\n.form-field input[type=text] {\\n  background-color: var(--bg-name);\\n}\\n\\n.form-field input[type=email] {\\n  background-color: var(--bg-email);\\n}\\n\\n.form-field textarea {\\n  padding-top: 15px;\\n  height: 150px;\\n  background-color: var(--bg-textarea);\\n}\\n\\n.submit-btn {\\n  display: block;\\n  width: 11.25rem;\\n  margin: 0 auto;\\n  padding: 14px 0;\\n  font-size: 1rem;\\n  letter-spacing: 0.1em;\\n  text-align: center;\\n  color: var(--text-btn);\\n  background-color: var(--bg-btn);\\n  border: 2px solid var(--bg-btn);\\n  cursor: pointer;\\n  transition: color 0.3s, background-color 0.3s;\\n}\\n\\n.submit-btn:hover:not(:disabled) {\\n  opacity: 0.8;\\n}\\n\\n.submit-btn:disabled {\\n  color: #ccc;\\n  background-color: transparent;\\n  border: 2px solid #ccc;\\n  cursor: not-allowed;\\n}\\n\\n@media (min-width: 36em) {\\n  .form-field {\\n    margin-bottom: 1.875rem;\\n  }\\n}\\n\\n@media (min-width: 48em) {\\n  .form-fields {\\n    max-width: 37.5rem;\\n  }\\n}\\n\\n.form-field {\\n  position: relative;\\n}\\n\\n.form-field .indicator {\\n  position: absolute;\\n  top: 15px;\\n  right: 20px;\\n  width: 10px;\\n  height: 10px;\\n  display: none;\\n  font-size: 1rem;\\n}\\n\\n.form-field .indicator.valid {\\n  display: block;\\n  color: var(--text-field);\\n}\\n\\n.thankyou {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 20rem;\\n  height: 100vh;\\n  margin: 0 auto;\\n  padding-left: 1.25rem;\\n}\\n\\n.thankyou__title {\\n  font-family: \\\"Oswald\\\", sans-serif;\\n  font-size: 2.5rem;\\n  font-weight: 700;\\n  line-height: 44px;\\n  letter-spacing: 0.15em;\\n  margin-bottom: 0.9375rem;\\n}\\n\\n.thankyou__text {\\n  font-size: 0.9375rem;\\n  line-height: 1.5em;\\n  letter-spacing: 0.3em;\\n  margin-bottom: 2.5rem;\\n}\\n\\n.thankyou__btn {\\n  display: block;\\n  width: 14.375rem;\\n  margin: 0 auto;\\n  padding: 14px 0;\\n  font-size: 1rem;\\n  letter-spacing: 0.1em;\\n  text-align: center;\\n  color: var(--text-btn);\\n  background-color: var(--bg-btn);\\n  border: 2px solid var(--bg-btn);\\n  cursor: pointer;\\n  transition: color 0.3s, background-color 0.3s;\\n  margin: 0;\\n}\\n\\n.thankyou__btn:hover:not(:disabled) {\\n  opacity: 0.8;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio/./app/assets/styles/styles.css?./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./app/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./app/assets/styles/styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_url_false_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js?url=false!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./styles.css */ \"./node_modules/css-loader/dist/cjs.js?url=false!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./app/assets/styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_url_false_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_url_false_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://portfolio/./app/assets/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/assets/scripts/App.js");
/******/ 	
/******/ })()
;