
let currentCount = document.getElementById("current-count")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total")

let count = 0
let total = 0

function increment() {
    count = count + 1
    currentCount.innerText = count
}
function decrement() {
    if(count > 0) {
        count = count - 1;
    }
    currentCount.innerText = count
}
function save() {
    if(count > 0) {
        saveEl.innerText += " " + count + " - "
        total += count
        totalEl.innerText = "Total Entries: " + total 
        currentCount.innerText = 0
        count = 0
    }
}