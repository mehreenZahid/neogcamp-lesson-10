var initialPrice = document.querySelector("#initial-price")
var stockQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var submitBtn = document.querySelector("#submit-btn")
var outputBox = document.querySelector("#output-box")

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current)*quantity
        var lossPercentage = (loss/initial)*100

        console.log(`Your loss is ${loss} and the loss percentage is ${lossPercentage}%`)
    }
    else if(current > initial){
        var profit = (current - initial)*quantity
        var profitPercentage = (profit/initial)*100

        console.log(`Your profit is ${profit} and the profit percentage is ${profitPercentage}%`)
    }
    else{
        console.log("No profit or loss")
    }
}

calculateProfitAndLoss(100, 10, 400)