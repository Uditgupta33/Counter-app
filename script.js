const increment = document.querySelector("#incriment");
const decrement = document.querySelector("#decriment");
const count = document.querySelector(".count");
const resetBtn = document.querySelector("#reset-btn");



increment.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    count.innerText = countValue + 1
})

decrement.addEventListener('click', ()=>{
    const countValue = parseInt(count.innerText)
    count.innerText = countValue - 1
})

resetBtn.addEventListener('click', ()=>{
   count.innerText = 0
})