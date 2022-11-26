import { playerState, currentQuestion } from './index.js'
import { randomNumber, createAndInsertDiv, toggleElementHide, scale } from './utils.js'
import { updateHelpsDisplay } from "./display.js";

const containerContent = document.querySelector('.container-content')
const btnAudienceHelp = document.querySelector('#btn-audience')
const modal = document.querySelector('.container-modal')
const btnStudentsHelp = document.querySelector('#btn-students')
let containerParentHints

export function stillHaveAttemptsLeft(helpName) {
    let attemptsLefts = helpName.querySelector('span').innerHTML
    if (attemptsLefts > 0) {
        return true
    } else {
        return false
    }
}

function incorrectAlternatives() {
    let rightAlternative = currentQuestion.rightAlternative()
    let nQ1, nQ2, nQ3

    if (rightAlternative == 'a') {
        nQ1 = 'b';
        nQ2 = 'c';
        nQ3 = 'd';
    }
    if (rightAlternative == 'b') {
        nQ1 = 'a';
        nQ2 = 'c';
        nQ3 = 'd';
    }
    if (rightAlternative == 'c') {
        nQ1 = 'b';
        nQ2 = 'a';
        nQ3 = 'd';
    }
    if (rightAlternative == 'd') {
        nQ1 = 'b';
        nQ2 = 'c';
        nQ3 = 'a';
    }
    return [nQ1, nQ2, nQ3]
}

function printPersorCard(containerCardName, numberOfCards) {
    for (let i = 0; i < numberOfCards; i++) {
        let personCard = createAndInsertDiv(containerCardName, 'person-card')
        let icon = "<img src='../assets/person.svg' alt='Ícone de uma pessoa'>"

        modal.querySelector('.title').innerHTML = '<h1>Platéia</h1>'

        let probability = randomNumber(1, 10)
        if (probability <= 4) {
            personCard.innerHTML = icon + `<p>${currentQuestion.rightAlternative()}</p>`
        } else if (probability == 5 || probability == 6) {
            personCard.innerHTML = icon + `<p>${incorrectAlternatives()[0]}</p>`
        } else if (probability == 7 || probability == 8) {
            personCard.innerHTML = icon + `<p>${incorrectAlternatives()[1]}</p>`
        } else if (probability == 9 || probability == 10) {
            personCard.innerHTML = icon + `<p>${incorrectAlternatives()[2]}</p>`
        }
    }
}

function printStudentCard(containerCardName, numberOfCards) {
    for (let i = 0; i < numberOfCards; i++) {
        let personCard = createAndInsertDiv(containerCardName, 'person-card')
        let icon = "<img src='../assets/student.svg' alt='Ícone de uma pessoa'>"

        modal.querySelector('.title').innerHTML = '<h1>Universitários</h1>'
        
        let probability = randomNumber(1, 10)
        if (probability <= 7)
            personCard.innerHTML = icon + `<p>${currentQuestion.rightAlternative()}</p>`
        else if (probability == 8)
            personCard.innerHTML = icon + `<p>${incorrectAlternatives()[0]}</p>`
        else if (probability == 9)
            personCard.innerHTML = icon + `<p>${incorrectAlternatives()[1]}</p>`
        else if (probability == 10)
            personCard.innerHTML = icon + `<p>${incorrectAlternatives()[2]}</p>`
    }
}

export function audienceHelp() {
    if (stillHaveAttemptsLeft(btnAudienceHelp)) {
        containerParentHints = createAndInsertDiv(containerContent, 'container-parent-hint')
        playerState.audienceAssistancesCount -= 1


        let containerPersonCard1 = createAndInsertDiv(containerParentHints, 'container-person-card')
        let containerPersonCard2 = createAndInsertDiv(containerParentHints, 'container-person-card')
        let containerPersonCard3 = createAndInsertDiv(containerParentHints, 'container-person-card')

        printPersorCard(containerPersonCard1, 11)
        printPersorCard(containerPersonCard2, 10)
        printPersorCard(containerPersonCard3, 9)

        updateHelpsDisplay(playerState)
        toggleElementHide(modal)
    }
}

export function studentsHelp() {
    if (stillHaveAttemptsLeft(btnStudentsHelp)) {
        containerParentHints = createAndInsertDiv(containerContent, 'container-parecet-hint')
        playerState.studentsAssistancesCount--

        let containerStudentsCard = createAndInsertDiv(containerParentHints, 'container-person-card')
        printStudentCard(containerStudentsCard, 3)
        
        scale(containerStudentsCard, 2)
        updateHelpsDisplay(playerState)
        toggleElementHide(modal)
     }
}

export { containerParentHints }
