import { audienceHelp, stillHaveAttemptsLeft, containerParentHints, studentsHelp, cardsHelp, giveUp } from "./modalHelps.js";
import { hideElement, toggleElementsHide } from "./utils.js";
import { game, playerState, newQuestion } from "./index.js";
import { updateHelpsDisplay } from "./display.js";

const btnCloseModal = document.querySelector('#btn-close-modal')
const btnAudienceHelp = document.querySelector('#btn-audience')
const btnSkipHelp = document.querySelector('#btn-skip')
const btnStudentsHelp = document.querySelector('#btn-students')
const btnCardsHelp = document.querySelector('#btn-cards')
const btnGiveUp = document.querySelector('#btn-giveup')
const containerMenu = document.querySelector('.container-menu')
const containerGame = document.querySelector('.container-game')
const modal = document.querySelector('.container-modal')
const btnPlay = document.querySelector('#btn-play')
const containerContent = document.querySelector('.container-content')
const containerCards = document.querySelector('.container-cards')

export function resetModalToDefault() {
    hideElement(modal)
    hideElement(containerCards)
    if (containerContent.querySelector('.container-parent-hint') != null) {
        containerContent.removeChild(containerParentHints)
    }
}

btnPlay.addEventListener('click', () => {
    toggleElementsHide(containerMenu, containerGame)
    game()
})

window.addEventListener('keydown', (e) => {
    resetModalToDefault()
})

modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        resetModalToDefault()
    }
})

btnCloseModal.addEventListener('click', () => {
    resetModalToDefault()

})


btnSkipHelp.onclick = () => {
    if (stillHaveAttemptsLeft(btnSkipHelp)) {
        playerState.skipCount -= 1
        updateHelpsDisplay(playerState)

        newQuestion(playerState)
    }
}

btnAudienceHelp.onclick = () => {
    audienceHelp()
}

btnStudentsHelp.onclick = () => {
    studentsHelp()
}

btnCardsHelp.onclick = () => {
    cardsHelp()
}

btnGiveUp.addEventListener('click', () => {
    giveUp()
})