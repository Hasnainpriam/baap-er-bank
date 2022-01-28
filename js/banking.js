function inputValue(input){
    const inputField = document.getElementById(input);
    const newAmountText = inputField.value;
    const newAmount = parseFloat(newAmountText);
    inputField.value = '';
    return newAmount;
}

function updateValues(money,newDepositAmount){
    const amountTotal = document.getElementById(money);
    const previousAmountText = amountTotal.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const newAmountTotal = previousAmount + newDepositAmount;
    amountTotal.innerText = newAmountTotal;
}

function updateBalance(balance,newAmount,inAdd){
    const balanceTotal = document.getElementById(balance);
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(inAdd == true ){
        const newBalanceTotal = previousBalanceTotal + newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = previousBalanceTotal - newAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    newDepositAmount=inputValue('deposit-input');
    if(newDepositAmount > 0){
    // update deposit total
    newDepositTotal=updateValues('deposit-total',newDepositAmount);
    // update account balance 
    newBalanceTotal=updateBalance('balance-total',newDepositAmount,true);
    }
    
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    newWithdrawAmount = inputValue('withdraw-input');
    currentBalance=getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance){
    // set withdraw total
    withdrawTotal = updateValues('withdraw-total',newWithdrawAmount);
    // update balance
    newBalanceTotal=updateBalance('balance-total',newWithdrawAmount,false);
    } 
})