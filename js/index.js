import { updateHelpsDisplay, updateQuestionDisplay } from "./display.js";
import questions from "./questions.js";
import { createAndInsertButton, hideElement, scale, selectRandomQuestion, showElement } from "./utils.js";
import './buttons.js'

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
const containerGame = document.querySelector('.container-game')
const containerAlternatives = document.querySelector('.container-alternatives')

let a = containerAlternatives.querySelector('#altA')
let b = containerAlternatives.querySelector('#altB')
let c = containerAlternatives.querySelector('#altC')
let d = containerAlternatives.querySelector('#altD')

let questionNumber


function newQuestion(playerState) {
    questionNumber = selectRandomQuestion(playerState.difficult)

    if (questions[questionNumber].alreadyAnswered == 1) {
        newQuestion(playerState)
    } else {
        updateCurrentQuestionObject()
        updateAllDisplay()
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
        let refresh = createAndInsertButton(modal.querySelector('.container-content'), 'refresh')
        refresh.innerHTML = 'Reiniciar'
        scale(refresh, .5)
        refresh.onclick = () => {
            location.reload()
        }
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

export function giveUp() {

}



export { playerState, currentQuestion, game, endGame, newQuestion, a, b, c, d }
