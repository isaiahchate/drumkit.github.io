const numberOfButtons = document.querySelectorAll('.drum');
for(let i = 0; i < numberOfButtons.length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        const buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animationButton(buttonInnerHTML);
    })
}

//keypress eventlistener

document.addEventListener('keypress', function(event){
    makeSound(event.key);
    animationButton(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            const audio1 = new Audio('sounds/tom-1.mp3'); audio1.play()
            break;
    
        case "a":
            const audio2 = new Audio('sounds/tom-2.mp3'); audio2.play()
            break;
        case "s":
            const audio3 = new Audio('sounds/tom-3.mp3'); audio3.play()
            break;
        case "d":
            const audio4 = new Audio('sounds/tom-4.mp3'); audio4.play()
            break;
        case "j":
            const audio5 = new Audio('sounds/snare.mp3'); audio5.play()
            break;
        case "k":
            const audio6 = new Audio('sounds/kick-bass.mp3'); audio6.play()
            break;
        case "l":
            const audio7 = new Audio('sounds/crash.mp3'); audio7.play()
            break;
        default: "your have pressed wtong keys"
            break;
    }
}

function animationButton(currentKey){
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 300);
}
// function add(num1,num2){
//     return num1 + num2;
// }
// function multiply(num1, num2){
//     return num1 * num2;
// }
// function divide(num1, num2){
//     return num1 / num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1, num2)
// }

//object constructor and object lessons
// function houseKeeper(name,age,color,language,gender){
//     this.name = name;
//     this.age= age;
//     this.color = color;
//     this.language = language;
//     this.gender = gender;
//     this.move = function time(){
//         alert('cleaning time');
//     }
// }

// const houseKeeper1 = new houseKeeper("Nelly", 22, "black", "kaonde", "female");
// const houseKeeper2 = new houseKeeper("Muti", 20, "Black", "lamba", "female");
// console.log(houseKeeper1)

// const bellBoy1 = {
//     name: "isaiah",
//     age: 30,
//     workPermit: true,
//     moveSuiteCase: function moveOn(){
//         alert("time to move and clean");
//     }
// }






