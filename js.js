const value = document.querySelector("#value")
const btnDecrease = document.querySelector(".btn-decrease")
const btnReset = document.querySelector(".btn-reset")
const btnIncrease = document.querySelector(".btn-increase")
let count = 0

function updateValue() {
    value.textContent = count;
    console.log(count);
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}

btnDecrease.addEventListener ("click", () => {
    count--;
    updateValue();
})
btnReset.addEventListener ("click", () => {
    count = 0;
    updateValue();
})
btnIncrease.addEventListener ("click", () => {
    count++;
    updateValue();
})