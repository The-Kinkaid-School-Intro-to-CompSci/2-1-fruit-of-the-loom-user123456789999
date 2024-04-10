let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"},
    {name: "strawberry", color: "red", shape: "cone", emoji: "🍓"},
    {name: "watermelon", color: "red", shape: "round", emoji: "🍉"},
    {name: "avocado", color: "green", shape: "oval", emoji: "🥑"},
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
    
}
function addFruitCard(fruit) {
    let newFruitCard = document.createElement('div');
    let fruitHeading = document.createElement('h3');
    fruitHeading.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);
    let fruitColor = document.createElement('p');
    fruitColor.textContent = fruit.color;
    fruitColor.style.color=fruit.color;
    newFruitCard.appendChild(fruitColor);
    let fruitShape = document.createElement('p');
    fruitShape.textContent = fruit.shape;
    newFruitCard.appendChild(fruitShape);
    fruitEmoji = document.createElement('p');
    fruitEmoji.textContent = fruit.emoji;
    newFruitCard.appendChild(fruitEmoji);
    let fruitContainer = document.querySelector('#cards');
    fruitContainer.appendChild(newFruitCard);
    newFruitCard.classList.add('fruitCard');
}
function fruitIsLessThan6(fruit){
    let length=fruit.name.length;
    return(length<6);
}
function filterByLessThan6(){
    clearCards();
    let lessThan6Fruits=[];
    for (const fruit of fruitObjects){
        if (fruitIsLessThan6(fruit)){
            lessThan6Fruits.push(fruit);
        }
    }
    for (const fruit of lessThan6Fruits){
        addFruitCard(fruit);
    }
}
function fruitIsExactly6(fruit){
    let length=fruit.name.length;
    return(length===6);
}
function filterBy6(){
    clearCards();
    let exactly6Fruits=[];
    for (const fruit of fruitObjects){
        if (fruitIsExactly6(fruit)){
            exactly6Fruits.push(fruit);
        }
    }
    for (const fruit of exactly6Fruits){
        addFruitCard(fruit);
    }
}
function runProgram() {
    console.log("Program is running");
    for (const fruit of fruitObjects){
        addFruitCard(fruit);
    }
    let buttonsContainer = document.querySelector('#buttonsContainer');
    let lessThan6Button = document.createElement('button');
    lessThan6Button.textContent="Fruits with less than 6 letters";
    lessThan6Button.addEventListener('click', filterByLessThan6);
    buttonsContainer.appendChild(lessThan6Button);
    let exactly6Button = document.createElement('button');
    exactly6Button.textContent="Fruits with exactly 6 letters";
    exactly6Button.addEventListener('click', filterBy6)
    buttonsContainer.appendChild(exactly6Button);
    
    



}

document.addEventListener('DOMContentLoaded', runProgram);