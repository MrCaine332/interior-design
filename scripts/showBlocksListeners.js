
const mainHeaderEls = document.querySelector('.main-header__content').children

const mainReasons = document.querySelector('.main-reasons')

const timeoutTimerForMainHeaderInitial = 250
const timeoutTimerForMainHeaderStep = 350

const textRowEls = document.querySelectorAll('.main__row-text')

const showOnLoad = () => {
    for (let i = 0; i < mainHeaderEls.length; i++) {
        showElementWithTimeout(mainHeaderEls[i], timeoutTimerForMainHeaderInitial + timeoutTimerForMainHeaderStep * i)
    }
    window.removeEventListener('load', showOnLoad)
}

const showOnScroll = () => {
    if (document.documentElement.scrollTop >= 450) {
        if (textRowEls[0].classList.contains('hidden-block')) {
            showElementWithTimeout(textRowEls[0])
        }
    }
    if (document.documentElement.scrollTop >= 1600) {
        if (textRowEls[1].classList.contains('hidden-block')) {
            showElementWithTimeout(textRowEls[1])
        }
    }
    if (document.documentElement.scrollTop >= 5300) {
        if (textRowEls[2].classList.contains('hidden-block')) {
            showElementWithTimeout(textRowEls[2])
        }
    }
    if (document.documentElement.scrollTop >= 5800) {
        if (mainReasons.classList.contains('hidden-block')) {
            showElementWithTimeout(mainReasons)
        }
    }
}

const showElementWithTimeout = (element, time = 0) => {
    setTimeout(() => {
        element.classList.toggle('hidden-block')
    }, time)
}

window.addEventListener('load', showOnLoad)
window.addEventListener('scroll', showOnScroll)