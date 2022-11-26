import questions from "./questions.js"
import { playerState } from "./index.js"

const skipCountDisplay = document.querySelector('#btn-skip span')
const audienceCountDisplay = document.querySelector('#btn-audience span')
const studentsCountDisplay = document.querySelector('#btn-students span')
const cardsCountDisplay = document.querySelector('#btn-cards span')

const questionDisplay = document.querySelector('.question-description')
const alternativeA = document.querySelector('#altA p')
const alternativeB = document.querySelector('#altB p')
const alternativeC = document.querySelector('#altC p')
const alternativeD = document.querySelector('#altD p')

const money = document.querySelector('#amountOfMoney')
const numberOfQuestion = document.querySelector('.title h1')

export function updateQuestionDisplay(currentQuestion) {
    questionDisplay.innerText = questions[currentQuestion.selectedQuestionNumber].question

    alternativeA.innerText = questions[currentQuestion.selectedQuestionNumber].a
    alternativeB.innerText = questions[currentQuestion.selectedQuestionNumber].b
    alternativeC.innerText = questions[currentQuestion.selectedQuestionNumber].c
    alternativeD.innerText = questions[currentQuestion.selectedQuestionNumber].d

    money.innerText = "R$ " + playerState.money
    numberOfQuestion.innerText = "Pergunta " + (playerState.numberOfQuestionsAnswered + 1)
}

export function updateHelpsDisplay (playerState) {
    skipCountDisplay.innerText = playerState.skipCount
    audienceCountDisplay.innerText = playerState.audienceAssistancesCount
    studentsCountDisplay.innerText = playerState.studentsAssistancesCount
    cardsCountDisplay.innerText = playerState.cardsAssistancesCount
}
