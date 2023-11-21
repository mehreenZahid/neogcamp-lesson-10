var initialPrice = document.querySelector("#initial-price")
var stockQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var submitBtn = document.querySelector("#submit-btn")
var outputBox = document.querySelector("#output-box")

submitBtn.addEventListener('click', submitHandler)

function submitHandler(){
    var ip = Number(initialPrice.value)
    var qty = Number(stockQuantity.value)
    var curr = Number(currentPrice.value)

    calculateProfitAndLoss(ip, qty, curr)
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current)*quantity
        var lossPercentage = (loss/initial)*100

        showOutput(`😞 Your loss is ${loss} and the loss percentage is ${lossPercentage}%`)
    }
    else if(current > initial){
        var profit = (current - initial)*quantity
        var profitPercentage = (profit/initial)*100

        showOutput(`😄 Your profit is ${profit} and the profit percentage is ${profitPercentage}%`)
    }
    else{
        showOutput("No profit or loss")
    }
}

function showOutput(message){
    outputBox.innerText = message
}