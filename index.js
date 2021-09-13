const init = document.querySelector("#initPrice");
const stonks = document.querySelector("#stonks");
const curPrice = document.querySelector("#curPrice");
const btn_check = document.querySelector(".btn-check");
const outputHere = document.querySelector(".outputHere");
const profit_gif = document.querySelector(".profit_gif");
const Very_high_loss_png = document.querySelector(".Very_high_loss_png");
const loss_gif = document.querySelector(".loss_gif");
const loader = document.querySelector(".loader");

loader.style.display="none";
Very_high_loss_png.style.display="none";
loss_gif.style.display="none";
profit_gif.style.display="none";


btn_check.addEventListener("click", function clickEventHandler(){

} );

function profit_or_loss() {

    var sellingPrice = curPrice.value * stonks.value;
    var costPrice = init.value * stonks.value;
    var differ = Math.abs(costPrice-sellingPrice);
    var percent = parseFloat((differ/costPrice)*100).toFixed(2);
    
    if ((sellingPrice - costPrice) < 0) {
        outputHere.innerText=("loss of "+differ+" and the percentage of loss is "+percent);
    } else
        outputHere.innerText=("Profit of "+differ+" and the percentage of profit is "+percent);
}