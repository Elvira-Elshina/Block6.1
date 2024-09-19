export const visibleMenu = document.querySelector('.big-container-menu')
const hiddenGeneral = document.querySelector('.general-container')
const openMenu = document.querySelector('.nav__button-burger')
const closeMenu = document.querySelector('.header-menu__button-close')
const scrollNone = document.querySelector('.body')

//открыть-закрыть меню
openMenu.addEventListener('click', function () {
  visibleMenu.classList.toggle('menu-visible-mobile')
  visibleMenu.classList.toggle('big-container-menu')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
  scrollNone.classList.toggle('body_scroll--none')
})

closeMenu.addEventListener('click', function () {
  visibleMenu.classList.toggle('big-container-menu')
  visibleMenu.classList.toggle('menu-visible-mobile')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
  scrollNone.classList.toggle('body_scroll--none')
})

const closeMenuBlur = document.querySelector('.overlay')

closeMenuBlur.addEventListener('click', function () {
  visibleMenu.classList.toggle('big-container-menu')
  visibleMenu.classList.toggle('menu-visible-mobile')
  hiddenGeneral.classList.toggle('hidden-general')
  hiddenGeneral.classList.toggle('general-container')
  scrollNone.classList.toggle('body_scroll--none')
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
  scrollNone.classList.toggle('body_scroll--none')
})

closeCall.addEventListener('click', function () {
  callWindow.classList.toggle('visible-feedback')
  callWindow.classList.toggle('big-container-call')
  scrollNone.classList.toggle('body_scroll--none')
})

const closeCallBlur = document.querySelector('.overlay-call')

closeCallBlur.addEventListener('click', function () {
  callWindow.classList.toggle('visible-feedback')
  callWindow.classList.toggle('big-container-call')
  scrollNone.classList.toggle('body_scroll--none')
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
  scrollNone.classList.toggle('body_scroll--none')
})

closeFeedback.addEventListener('click', function () {
  feedbackWindow.classList.toggle('visible-feedback')
  feedbackWindow.classList.toggle('big-container-feedback')
  scrollNone.classList.toggle('body_scroll--none')
})

const closeFeedbackBlur = document.querySelector('.overlay-feedback')

closeFeedbackBlur.addEventListener('click', function () {
  feedbackWindow.classList.toggle('visible-feedback')
  feedbackWindow.classList.toggle('big-container-feedback')
  scrollNone.classList.toggle('body_scroll--none')
})

//модалки из меню
const openCallMenu = document.querySelector('.footer-menu__button-call')
const callOnMenu = document.querySelector('.big-container-call')

openCallMenu.addEventListener('click', function () {
  callOnMenu.classList.toggle('big-container-call')
  callOnMenu.classList.toggle('visible-feedback')
  scrollNone.classList.toggle('body_scroll--none')
})

const openFeedbackMenu = document.querySelector('.footer-menu__button-chat')
const feedbackOnMenu = document.querySelector('.big-container-feedback')

openFeedbackMenu.addEventListener('click', function () {
  feedbackOnMenu.classList.toggle('big-container-feedback')
  feedbackOnMenu.classList.toggle('visible-feedback')
  scrollNone.classList.toggle('body_scroll--none')
})

//кнопка "читать далее"

const openReadMore = document.querySelector('.main__button-read-more')
const textP = document.querySelector('.main__text-p')
const textSpan = document.querySelector('.main__text-span')
const textSpanLorem = document.querySelector('.main__text-span-lorem')
const header1 = document.querySelector('.header-1')

openReadMore.addEventListener('click', function () {
  textP.classList.toggle('main__text-p')
  textSpan.classList.toggle('main__text-span')
  textSpanLorem.classList.toggle('main__text-span-lorem')
  header1.classList.toggle('header-1_full--text')

  if (!textP.classList.contains('main__text-p')) {
    openReadMore.textContent = 'Скрыть'
  } else {
    openReadMore.textContent = 'Читать далее'
  }
})
