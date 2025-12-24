button = document.getElementById("cashOut");


function atm(){
    const balance = document.getElementById('balance').value;
    const amountInput = document.getElementById('amount').value;

    if(isNaN(balance) && balance <= 0){
        alert("Please enter a valid positive number for balance.");
        return;
    }
    else if(isNaN(amountInput) && amountInput <= 0){
        alert("Please enter a valid positive number for amount.");
        return;
    } 
    else if(balance < amountInput){
        alert("not enough money");
    } else{
        sum = balance - amountInput;
        alert("you withderw: $" + amountInput + "money left: $" + sum)
    }
}

button.addEventListener("click", atm);