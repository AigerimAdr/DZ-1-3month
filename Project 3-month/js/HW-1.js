const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp = /\w+(\.\w+)*@gmail\.com$/

emailCheck.onclick = () => {
    if (regExp.test(emailInput.value) === "") {
        emailResult.innerHTML = "Введите почтовый адрес"
        emailResult.style.color = "red"
    } else if (regExp.test(emailInput.value)) {
        emailResult.innerHTML = 'Правильный почтовый адрес'
        emailResult.style.color = 'green'
    } else {
        emailResult.innerHTML = 'Невалидный почтовый адрес'
        emailResult.style.color = 'red'
    } 
}


// HW 1 part 2

const childBlock = document.querySelector('.child_block')

const moveBlock = (position) => {
    childBlock.style.left = `${position}px`
    if (position < 1000) {
        setTimeout(() => moveBlock(position + 5), 10)
    } else {
        moveBlock(0);
    }
}
moveBlock(0)