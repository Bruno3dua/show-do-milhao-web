import { playerState, currentQuestion, a, b, c, d, endGame } from './index.js'
import { randomNumber, createAndInsertDiv, toggleElementHide, scale, showElement, createAndInsertButton } from './utils.js'
import { updateHelpsDisplay } from "./display.js";
import { resetModalToDefault } from './buttons.js';
let numberOfEliminatedQuestions

const containerContent = document.querySelector('.container-content')
const btnAudienceHelp = document.querySelector('#btn-audience')
const modal = document.querySelector('.container-modal')
const btnStudentsHelp = document.querySelector('#btn-students')
const btnCardsHelp = document.querySelector('#btn-cards')
const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const cards = document.querySelectorAll('.card')
let isFliped = false
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
        let icon = "<img src='https://imgur.com/EoGl2jK' alt='Ícone de uma pessoa'>"

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

function printCards() {
    let containerCards = containerContent.querySelector('.container-cards')

    modal.querySelector('.title').innerHTML = '<h1>Cartas</h1>'

    showElement(containerCards)
    toggleElementHide(modal)
}

export function pickedCard() {
    let pickedCard = randomNumber(0, 3)
    return pickedCard
}

export function resetCardsToDefalt() {
    for(let i = 0; i < 3; i++){
        cards[i].classList.remove('flip')
        cards[i].querySelector('p').innerHTML = '?'
    }
    isFliped = false
}

export function flipCard(card) {
    card.classList.add('flip')
    let pickACard = card.querySelector('p')
    setTimeout(() => {
        pickACard.innerHTML = `Eliminou <span>${numberOfEliminatedQuestions}</span> questões`
    }, 50)
}

function deleteAlternatives() {
    if (isFliped){
        return
    } else {
        numberOfEliminatedQuestions = pickedCard()
        let index
        let indexUsed = []
        for (let i = 0; i < numberOfEliminatedQuestions; i++) {
    
            index = randomNumber(0, 2)
    
            while (indexUsed.includes(index))
                index = randomNumber(0, 2)
    
            indexUsed.push(index)
    
            if (incorrectAlternatives()[index] == 'a') {
                a.style.backgroundColor = 'red'
            }
            if (incorrectAlternatives()[index] == 'b') {
                b.style.backgroundColor = 'red'
            }
            if (incorrectAlternatives()[index] == 'c') {
                c.style.backgroundColor = 'red'
            }
            if (incorrectAlternatives()[index] == 'd') {
                d.style.backgroundColor = 'red'
            }
        }
        isFliped = true
    }
}

export function cardsHelp() {
    if(stillHaveAttemptsLeft(btnCardsHelp)) {
        playerState.cardsAssistancesCount--
        updateHelpsDisplay(playerState)
        printCards()
    
        card1.addEventListener('click', () => {
            if (!isFliped){
                flipCard(card1)
                deleteAlternatives()
            }
        })
        card2.addEventListener('click', () => {
            if (!isFliped){
                flipCard(card2)
                deleteAlternatives()
            }
        })
        card3.addEventListener('click', () => {
            if (!isFliped){
                flipCard(card3)
                deleteAlternatives()
            }
        })
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
        containerParentHints = createAndInsertDiv(containerContent, 'container-parent-hint')
        playerState.studentsAssistancesCount--

        let containerStudentsCard = createAndInsertDiv(containerParentHints, 'container-person-card')
        printStudentCard(containerStudentsCard, 3)

        scale(containerStudentsCard, 2)
        updateHelpsDisplay(playerState)
        toggleElementHide(modal)
    }
}


export function giveUp() {
    containerParentHints = createAndInsertDiv(containerContent, 'container-parent-hint')
    toggleElementHide(modal)

    let containerAlternatives = createAndInsertDiv(containerParentHints, 'container-alternatives')
    let yes = createAndInsertButton(containerAlternatives, 'btnGivepY')
    let no = createAndInsertButton(containerAlternatives, 'btnGivepN')
    yes.innerHTML = 'Sim'
    no.innerHTML = 'Não'
    scale(containerAlternatives, .5)
    modal.querySelector('.title').innerHTML = '<h1>Desistir?</h1>'

    no.onclick = () => {
        resetModalToDefault()
    }

    yes.onclick = () => {
        endGame()
    }
}

export { containerParentHints }
