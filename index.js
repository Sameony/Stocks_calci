const init = document.querySelector("#initPrice");
const stonks = document.querySelector("#stonks");
const curPrice = document.querySelector("#curPrice");
const btn_check = document.querySelector(".btn-check");
const outputHere = document.querySelector(".outputHere");

btn_check.addEventListener("click", function profit_or_loss() {

    var sellingPrice = curPrice.value * stonks.value;
    var costPrice = init.value * stonks.value;
    if ((sellingPrice - costPrice) < 0) {
        console.log("loss");
    } else
        console.log("stonks!");
});