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




