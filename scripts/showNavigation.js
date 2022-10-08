const menuEl = document.querySelector('.nav-menu')
const logoEl = document.querySelector('.header__logo')
const menuBackgroundEl = document.querySelector('.nav-menu__background')

const navBtnLines = document.querySelector('.nav-button__content').children

const openMenu = () => {
    menuEl.classList.toggle('nav-menu_enabled')
    menuBackgroundEl.classList.toggle('nav-menu__background_enabled')
    logoEl.classList.toggle('header__logo_black')

    if (!navBtnLines[0].classList.contains('nav-button__line1_step1')) {
        navBtnLines[0].classList.toggle('nav-button__line1_step1')
        navBtnLines[1].classList.toggle('nav-button__line2_step1')
        setTimeout(() => {
            navBtnLines[0].classList.toggle('nav-button__line1_step2')
            navBtnLines[1].classList.toggle('nav-button__line2_step2')
        }, 300)

    } else {
        navBtnLines[0].classList.toggle('nav-button__line1_step2')
        navBtnLines[1].classList.toggle('nav-button__line2_step2')
        setTimeout(() => {
            navBtnLines[0].classList.toggle('nav-button__line1_step1')
            navBtnLines[1].classList.toggle('nav-button__line2_step1')
        }, 300)
    }
}

window.onclick = function(event) {
    if (!menuEl.contains(event.target) && !event.target.classList.value.includes('nav-button')) {
        if (menuEl.classList.contains('nav-menu_enabled')) {
            openMenu()
        }
    }
}