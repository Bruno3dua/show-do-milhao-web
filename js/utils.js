import questions from "./questions.js";

export function selectRandomQuestion(difficult)
{
    if (difficult == 1)
        return randomNumber(0, 19);
    else if (difficult == 2)
        return randomNumber(20, 39);
    else if (difficult == 3)
        return randomNumber(40, 59);
    else if (difficult == 4)
        return randomNumber(60, 69);
}

export function randomNumber(low, high) {
     return (Math.round(Math.random() * 9999) % (high - low + 1) + low)
}

export function toggleElementHide(element) {
    element.classList.toggle('hide')
}
export function toggleElementsHide(element1, element2) {
    element1.classList.toggle('hide')
    element2.classList.toggle('hide')
}

export function hideElement(element) {
    element.classList.add('hide')
}

export function showElement(element) {
    element.classList.remove('hide')
}

export function createAndInsertDiv(insertIn, divClassName) {
    let divName = document.createElement('div')
    insertIn.appendChild(divName)
    divName.classList.add(divClassName)
    return divName
}

export function scale(element, scaleFactor) {
    element.style.transform = `scale(${scaleFactor})`
}