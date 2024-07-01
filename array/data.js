// массиви
let arr = [1, 2, 3, 4, 5]
let arr2 = ['a', 'b', 'c', 'd', 'e']
let arr3 = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']

// об'єкти
let obj = {
    name: 'Vasya',
    age: 25,
    isMarried: false
}
let obj2 = {
    name: 'Petya',
    age: 30,
    isMarried: true
}

// обираєио всі елементи з класом div4ik
let divClass = document.querySelectorAll('.div4ik')
// обираємо елемент input
let input = document.querySelector('input')

// функція яка відповідає за зміну кольору блоків
let func = () => {
    let num = input.value
    let selectedDiv = divClass[num]
    divClass[0].style.backgroundColor = 'white'
    divClass[1].style.backgroundColor = 'white'
    divClass[2].style.backgroundColor = 'white'
    divClass[3].style.backgroundColor = 'white'
    divClass[4].style.backgroundColor = 'white'
    divClass[5].style.backgroundColor = 'white'
    selectedDiv.style.backgroundColor = 'red'
}

// ставимо функцію на зміну значення input
input.onchange = func

let textInput = document.querySelector('#textInput')
let button = document.querySelector('button')
let func2 = () => {
    let text = textInput.value
    let num = input.value
    let selectedDiv = divClass[num]
    console.log(selectedDiv);
    selectedDiv.innerHTML = text
}

button.onclick = func2




