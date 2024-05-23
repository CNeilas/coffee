const addBtn = document.getElementById("add-coffee");
const coffeeNumber = document.getElementById("coffee-number")
const totalNumber = document.getElementById("total-number")

let coffeeCount = JSON.parse(localStorage.getItem("count")) || 0;
coffeeNumber.innerText = coffeeCount;

let total = JSON.parse(localStorage.getItem("total")) || 0;
totalNumber.innerText = total;



function addCoffee() {
    coffeeCount++
    localStorage.setItem("count", JSON.stringify(coffeeCount))
    coffeeNumber.innerText = coffeeCount
}


function resetCounts() {
    const date = new Date()
    if (date.getHours() === 0  && date.getMinutes() ===0) {
        total += coffeeCount
        localStorage.setItem("total", JSON.stringify(total))
        coffeeCount = 0
        localStorage.removeItem("count")
        coffeeNumber.innerText = coffeeCount
        totalNumber.innerText = total
    }
}

addBtn.onclick = addCoffee
setInterval(resetCounts, 60000)
