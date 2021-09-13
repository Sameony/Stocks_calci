const init = document.querySelector("#initPrice");
const stonks = document.querySelector("#stonks");
const curPrice = document.querySelector("#curPrice");
const btn_check = document.querySelector(".btn-check");
const btn_goBack = document.querySelector(".btn-goBack");
var outputHere = document.querySelector(".outputHere");
const loader = document.querySelector(".loader");
const input_here = document.querySelector(".input");
var profit_sec = document.querySelector(".profit");
var loss_sec = document.querySelector(".loss");
var high_sec = document.querySelector(".highLoss");



loader.style.display = "none";
high_sec.style.display = "none";
loss_sec.style.display = "none";
profit_sec.style.display = "none";

btn_check.addEventListener("click", function gifTime() {
    loader.style.display = "block";
    outputHere.innerText = "";
    input_here.style.display = "none";
    setTimeout(function () {
        profit_or_loss()
    }, 1500)
});

function profit_or_loss() {
    loader.style.display = "none";
    if (isNaN(curPrice.value) || isNaN(stonks.value) || isNaN(init.value))
        errorHandler("Please enter numerical values only!");
    else if(curPrice.value==="" || stonks.value === "" || init.value==="")
        errorHandler("Dont leave the blocks empty!");
    else {
        var sellingPrice = curPrice.value * stonks.value;
        var costPrice = init.value * stonks.value;
        var differ = Math.abs(costPrice - sellingPrice);
        var percent = parseFloat((differ / costPrice) * 100).toFixed(2);

        if ((sellingPrice - costPrice) < 0) {
            gibOutput(differ, percent, false);
        } else
            gibOutput(differ, percent, true);
    }
}

function gibOutput(differ, percent, profit) {
    outputHere.style.display="block";
    if (profit) {
        profit_sec.style.display = "block";
        outputHere.innerText = ("Profit of " + differ + " and the percentage of profit is " + percent+"!!!");
    } else {
         if (percent < 50) {
            loss_sec.style.display = "block";
            outputHere.innerText = ("loss of " + differ + " and the percentage of loss is " + percent+"!!!");
       

        } else {
            high_sec.style.display = "block";
            outputHere.innerText = ("Oh NO! Huge Loss of " + differ + " and the percentage of loss is " + percent+"!!!");
        }

    }
}

function errorHandler(msg){
    input_here.style.display = "block";
    outputHere.innerText=(msg);
}