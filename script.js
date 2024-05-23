const addBtn = document.getElementById("add-coffee");
const coffeeNumber = document.getElementById("coffee-number")
let coffeeCount = 0;
let totalCount = 0;

function addCoffee() {
    coffeeCount++
    localStorage.setItem("count", JSON.stringify(coffeeCount))
    coffeeNumber.innerText = coffeeCount;
}

coffeeNumber.innerText = JSON.parse(localStorage.getItem("count"));
addBtn.onclick = addCoffee
