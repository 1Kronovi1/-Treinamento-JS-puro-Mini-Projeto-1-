let numbers = [];
let incrementar = 0
let array = document.querySelector('#array1');

function increment() {
    incrementar = incrementar + 1
    numbers.push(incrementar);
    console.log(numbers);
    array.innerHTML = numbers;
}

function decrement() {
    incrementar = incrementar - 1
    numbers.pop(incrementar);
    console.log(numbers);
    array.innerHTML = numbers;
}

//............................

let names = [];

let nome = document.querySelector('#nome');
let addBtn = document.querySelector('#textBtnAdd');
let array2 = document.querySelector('#array2');

function addString() {
    let index = names.indexOf(" " + nome.value)
    if (nome.value !== "") {
        names.push(" " + nome.value);
    }
    console.log(index)
    console.log(nome.value)
    array2.innerHTML = names;
}

function removeString() {
    let index = names.indexOf(" " + nome.value)
    if (index !== -1) {
        names.splice(index, 1)
    }
    array2.innerHTML = names;
    console.log(index)
}