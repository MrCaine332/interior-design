const workflowEl = document.querySelector('.main-workflow')
const stages = document.querySelector('.main-workflow__stages')
const stagesItems = stages.children

let currentStage = 0

const windowHeight = document.documentElement.clientHeight;
const startHeight = windowHeight * 0.5 - 250;
const endHeight = windowHeight - (windowHeight * 0.5 - 250);

const height = workflowEl.getBoundingClientRect().height

const stageStep = height / stagesItems.length

const trackWorkflowSlider = () => {
    const top = workflowEl.getBoundingClientRect().top
    const bottom = workflowEl.getBoundingClientRect().bottom

    if (top < startHeight && bottom > endHeight) {
        if (top < startHeight - stageStep * (currentStage + 1)) {
            currentStage++
            stages.style.transform = `translateY(-${currentStage * (100 / stagesItems.length)}%)`
        }
        if (top > startHeight - stageStep * currentStage) {
            currentStage--
            stages.style.transform = `translateY(-${currentStage * (100 / stagesItems.length)}%)`
        }
    }
}

document.addEventListener('scroll', trackWorkflowSlider)