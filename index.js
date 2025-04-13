let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let titleEl = document.getElementById("title-el")
let count = 0
let totalCounter = 0

function increment() {
    count += 1
    totalCounter +=1
    countEl.textContent = count
    titleEl.textContent = "Out Counter"
} 

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    titleEl.textContent = "Out Counter"
}

function reset() {
    count = 0
    totalCounter = 0
    saveEl.textContent  = "Previous entries: "
    titleEl.textContent = "Out Counter"
    countEl.textContent = count
}

function totalCount() {
    countEl.textContent = totalCounter
    titleEl.textContent = "Total Outs"
}
