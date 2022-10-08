const sliderTextItems = document.querySelector('.main-services__textarea-items')
const sliderPhotoItems = document.querySelector('.main-services__photos-items')
const sliderBackgroundItems = document.querySelector('.main-services__background-items')

const setInitialValues = () => {
    sliderTextItems.style.transition = 'none'
    sliderTextItems.style.transform = `translateY(33.3333%)`
    sliderPhotoItems.style.transition = 'none'
    sliderPhotoItems.style.transform = `translateX(101%)`
}

const setValuesAfterScroll = () => {
    sliderTextItems.style.transition = '2s'
    sliderTextItems.style.transform = 'none'
    sliderPhotoItems.style.transition = '2s'
    sliderPhotoItems.style.transform = 'none'
}

const moveSliderWithCoordinateAndOffset = (element, coordinate, translateValue, transitionTime, timeoutTime) => {
    const firstChild = element.children[0]
    element.style.transition = `${transitionTime} ease-out`
    element.style.transform = `translate${coordinate}(${translateValue})`
    setTimeout(() => {
        element.style.transition = 'none'
        element.style.transform = ''
        element.removeChild(firstChild)
        element.appendChild(firstChild)
    }, timeoutTime)
}

const initSlider = () => {
    if (document.documentElement.scrollTop >= 1000) {
        setValuesAfterScroll()
        window.removeEventListener('scroll', initSlider)
        const interval = setInterval(() => {
            moveSliderWithCoordinateAndOffset(sliderTextItems, 'Y', '-33.3333%', '1.5s', 1500)
            moveSliderWithCoordinateAndOffset(sliderPhotoItems, 'X', '-100%','1.5s', 1500)
            moveSliderWithCoordinateAndOffset(sliderBackgroundItems, 'X', '-130%','1.3s', 1500)
        }, 5000)
    }
}

setInitialValues()
window.addEventListener('scroll', initSlider)
















