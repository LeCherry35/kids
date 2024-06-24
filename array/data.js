let divId = document.querySelector('#div1')
let divClass = document.querySelectorAll('.div4ik')
let input = document.querySelector('input')

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
input.onchange = func




