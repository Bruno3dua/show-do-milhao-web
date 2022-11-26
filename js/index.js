import { updateHelpsDisplay, updateQuestionDisplay } from "./display.js";
import questions from "./questions.js";
import { toggleElementHide, hideElement, selectRandomQuestion, toggleElementsHide, showElement } from "./utils.js";
import { audienceHelp, stillHaveAttemptsLeft, containerParentHints, studentsHelp } from "./modalHelps.js";
import './animation.js'

const playerState = {
    difficult: 1,
    money: 0,
    skipCount: 3,
    audienceAssistancesCount: 3,
    studentsAssistancesCount: 3,
    cardsAssistancesCount: 3,
    currentQuestion: 0,
    numberOfQuestionsAnswered: 0
}

const currentQuestion = {
    selectedQuestionNumber: 0,
    rightAlternative: function () {
        return questions[this.selectedQuestionNumber].rightQ
    }
}

const modal = document.querySelector('.container-modal')
const containerContent = document.querySelector('.container-content')

const btnCloseModal = document.querySelector('#btn-close-modal')

const btnAudienceHelp = document.querySelector('#btn-audience')
const btnSkipHelp = document.querySelector('#btn-skip')
const btnStudentsHelp = document.querySelector('#btn-students')
const btnCardsHelp = document.querySelector('#btn-cards')
const btnGiveUp = document.querySelector('#btn-giveup')

const btnPlay = document.querySelector('#btn-play')

const containerMenu = document.querySelector('.container-menu')
const containerGame = document.querySelector('.container-game')
const containerAlternatives = document.querySelector('.container-alternatives')
const containerCards = document.querySelector('.container-cards')

let questionNumber
let a = containerAlternatives.querySelector('#altA')
let b = containerAlternatives.querySelector('#altB')
let c = containerAlternatives.querySelector('#altC')
let d = containerAlternatives.querySelector('#altD')

function newQuestion(playerState) {
    questionNumber = selectRandomQuestion(playerState.difficult)

    if (questions[questionNumber].alreadyAnswered == 1) {
        newQuestion(playerState)
    } else {
        return
    }
}

function updateCurrentQuestionObject() {
    currentQuestion.selectedQuestionNumber = questionNumber
    currentQuestion.alternativeA = questions[questionNumber].a
    currentQuestion.alternativeA = questions[questionNumber].b
    currentQuestion.alternativeA = questions[questionNumber].c
    currentQuestion.alternativeA = questions[questionNumber].d
}

function updateAllDisplay() {
    updateQuestionDisplay(currentQuestion)
    updateHelpsDisplay(playerState)
}

function isAnswer(alternative) {

    if (alternative.querySelector('span').innerText == currentQuestion.rightAlternative())
        return true
    else
        return false
}

function endGame() {
    setTimeout(() => {
        showElement(modal)
        hideElement(containerGame)
        modal.querySelector('.container-content').innerHTML = 'Você Perdeu'
    }, 2000)
}

function incorrectAlternative(alternative) {
    alternative.style.backgroundColor = 'red'
    answer().classList.add('rightAnswer')
    endGame()
}

function answer() {
    if (isAnswer(a))
        return a
    else if (isAnswer(b))
        return b
    else if (isAnswer(c))
        return c
    else if (isAnswer(d))
        return d
}

function handleMoney(playerState) {
    let AswCount = playerState.numberOfQuestionsAnswered

    if (AswCount < 4)
        playerState.money += 1000;
    else if (AswCount == 4)
        playerState.money = 10000;
    else if (AswCount > 4 && AswCount < 9)
        playerState.money += 10000;
    else if (AswCount == 9)
        playerState.money = 100000;
    else if (AswCount > 9 && AswCount <= 14)
        playerState.money += 100000;
    else if (AswCount == 15)
        playerState.money = '1M'
}

function correctAlternative(alternative) {
    alternative.classList.add('rightAnswer')

    setTimeout(() => {
        alternative.classList.remove('rightAnswer')
    }, 2000)

    questions[currentQuestion.selectedQuestionNumber].alreadyAnswered = 1

    handleMoney(playerState)

    playerState.numberOfQuestionsAnswered++
}

function showAnswer(alternative) {
    if (isAnswer(alternative)) {

        correctAlternative(alternative)
        setTimeout(() => {
            game()
        }, 2000)

    } else {
        incorrectAlternative(alternative)
    }
}

function setDifficulty(playerState) {
    let AswCount = playerState.numberOfQuestionsAnswered

    if (AswCount >= 0 && AswCount < 5)
        playerState.difficult = 1;
    else if (AswCount >= 5 && AswCount < 10)
        playerState.difficult = 2;
    else if (AswCount >= 10 && AswCount < 15)
        playerState.difficult = 3;
    else if (AswCount == 15)
        playerState.difficult = 4;
    else if (AswCount == 16) {
        win()
    }
}

function win() {
    showElement(modal)
    hideElement(containerGame)
    modal.querySelector('.container-content').innerHTML = ' Você Ganhou ' + '<span> 1 Milhão </span>' + ' de reais!'
    modal.querySelector('.title').innerHTML = '<h1>Parabéns!</h1>'
}

function game() {

    setDifficulty(playerState)

    newQuestion(playerState)

    updateCurrentQuestionObject()
    updateAllDisplay()

    a.onclick = () => {
        showAnswer(a)
    }

    b.onclick = () => {
        showAnswer(b)
    }

    c.onclick = () => {
        showAnswer(c)
    }

    d.onclick = () => {
        showAnswer(d)
    }

    window.onkeydown = (e) => {
        if (e.key == 'a')
            showAnswer(a)
        else if (e.key == 'b')
            showAnswer(b)
        else if (e.key == 'c')
            showAnswer(c)
        else if (e.key == 'd')
            showAnswer(d)
    }
}

btnPlay.addEventListener('click', () => {
    toggleElementsHide(containerMenu, containerGame)
    game()
})

window.onkeydown = (e) => {
    if (e.key == 'Escape')
        hideElement(modal)
}

modal.addEventListener('click', (e) => {
    if (e.target == modal)
        toggleElementHide(modal)
})

btnCloseModal.addEventListener('click', () => {
    toggleElementHide(modal)
    hideElement(containerCards)
    containerContent.removeChild(containerParentHints)
})

btnSkipHelp.onclick = () => {
    if (stillHaveAttemptsLeft(btnSkipHelp)) {
        playerState.skipCount -= 1
        updateHelpsDisplay(playerState)

        newQuestion(playerState)
        updateCurrentQuestionObject()
        updateAllDisplay()
    }
}


btnStudentsHelp.onclick = () => {
    if (stillHaveAttemptsLeft(btnStudentsHelp)) {
        studentsHelp()
    }
}

btnCardsHelp.onclick = () => {
    if (stillHaveAttemptsLeft(btnCardsHelp)) {
        playerState.cardsAssistancesCount -= 1
        updateHelpsDisplay(playerState)
        toggleElementHide(modal)
        showElement(containerCards)
    }
}

btnAudienceHelp.onclick = () => {
    audienceHelp()
}

btnGiveUp.addEventListener('click', () => {
    endGame()
})



export { playerState, currentQuestion }
