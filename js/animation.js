import { toggleElementHide } from "./utils.js"

const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')

card1.onclick = () => flipCard(card1)
card2.onclick = () => flipCard(card2)
card3.onclick = () => flipCard(card3)


function flipCard(card) {

    card.classList.add('flip')
    let pickedCard = card.querySelector('p')
    setTimeout(() => {
        pickedCard.innerHTML = 'Eliminou <span>3</span> questões'
    }, 50)
}
