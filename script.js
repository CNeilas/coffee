const addBtn = document.getElementById("add-coffee");
const coffeeNumber = document.getElementById("coffee-number")
const totalNumber = document.getElementById("total-number")
const resetBtn = document.getElementById("reset")

let coffeeCount = JSON.parse(localStorage.getItem("count")) || 0;
coffeeNumber.innerText = coffeeCount;

let total = JSON.parse(localStorage.getItem("total")) || 0;
totalNumber.innerText = total;

let lastReset = JSON.parse(localStorage.getItem("lastReset"))

function addCoffee() {
    coffeeCount++
    localStorage.setItem("count", JSON.stringify(coffeeCount))
    coffeeNumber.innerText = coffeeCount
}


function resetCounts() {
    const date = new Date();
    const currentDate = date.toISOString().split("T")[0];

    if (!lastReset || new Date(lastReset) < new Date(currentDate)) {
        total += coffeeCount;
        localStorage.setItem("total", JSON.stringify(total));
        coffeeCount = 0;
        localStorage.removeItem("count");
        coffeeNumber.innerText = coffeeCount;
        totalNumber.innerText = total;
        lastReset = currentDate;
        localStorage.setItem("lastReset", JSON.stringify(lastReset));
    }
}

function reset() {
    coffeeCount = 0;
    localStorage.removeItem("count");
    coffeeNumber.innerText = coffeeCount;
}

resetCounts()


addBtn.onclick = addCoffee;
resetBtn.onclick = reset;
setInterval(resetCounts, 60000);
