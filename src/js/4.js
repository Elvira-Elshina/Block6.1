export const visibleMenu = document.querySelector('.big-container-menu')
const hiddenGeneral = document.querySelector('.general-container')
const openMenu = document.querySelector('.nav__button-burger')
const closeMenu = document.querySelector('.header-menu__button-close')

//открыть-закрыть меню
openMenu.addEventListener('click', function () {
  visibleMenu.classList.toggle('menu-visible-mobile')
  visibleMenu.classList.toggle('big-container-menu')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
})

closeMenu.addEventListener('click', function () {
  visibleMenu.classList.toggle('big-container-menu')
  visibleMenu.classList.toggle('menu-visible-mobile')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
})

const closeMenuBlur = document.querySelector('.empty')

closeMenuBlur.addEventListener('click', function () {
  visibleMenu.classList.toggle('big-container-menu')
  visibleMenu.classList.toggle('menu-visible-mobile')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
})

//открыть-закрыть звонок

const openCall = document.querySelector('.nav__button-call')
const callWindow = document.querySelector('.big-container-call')
const closeCall = document.querySelector('.call__close-modal')

openCall.addEventListener('click', function () {
  callWindow.classList.toggle('big-container-call')
  callWindow.classList.toggle('visible-feedback')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
})

closeCall.addEventListener('click', function () {
  callWindow.classList.toggle('visible-feedback')
  callWindow.classList.toggle('big-container-call')
})

const closeCallBlur = document.querySelector('.empty-call')

closeCallBlur.addEventListener('click', function () {
  callWindow.classList.toggle('visible-feedback')
  callWindow.classList.toggle('big-container-call')
})

//открыть-закрыть обратную связь

const openFeedback = document.querySelector('.nav__button-chat')
const feedbackWindow = document.querySelector('.big-container-feedback')
const closeFeedback = document.querySelector('.feedback__close-modal')

openFeedback.addEventListener('click', function () {
  feedbackWindow.classList.toggle('big-container-feedback')
  feedbackWindow.classList.toggle('visible-feedback')
  hiddenGeneral.classList.toggle('general-container')
  hiddenGeneral.classList.toggle('hidden-general')
})

closeFeedback.addEventListener('click', function () {
  feedbackWindow.classList.toggle('visible-feedback')
  feedbackWindow.classList.toggle('big-container-feedback')
})

const closeFeedbackBlur = document.querySelector('.empty-feedback')

closeFeedbackBlur.addEventListener('click', function () {
  feedbackWindow.classList.toggle('visible-feedback')
  feedbackWindow.classList.toggle('big-container-feedback')
})

//модалки из меню
const openCallMenu = document.querySelector('.footer-menu__button-call')
const callOnMenu = document.querySelector('.big-container-call')

openCallMenu.addEventListener('click', function () {
  callOnMenu.classList.toggle('big-container-call')
  callOnMenu.classList.toggle('visible-feedback')
})

const openFeedbackMenu = document.querySelector('.footer-menu__button-chat')
const feedbackOnMenu = document.querySelector('.big-container-feedback')

openFeedbackMenu.addEventListener('click', function () {
  feedbackOnMenu.classList.toggle('big-container-feedback')
  feedbackOnMenu.classList.toggle('visible-feedback')
})
