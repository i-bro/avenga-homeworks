const bankData = {
    "admin": { pin: "0000", balance: 1000000, history: [] },
    "user1": { pin: "1234", balance: 500, history: [] },
    "user2": { pin: "9999", balance: 10, history: [] }
};

function mainMenu() {
    let choice = prompt(
        "=== IRONBANK TERMINAL ===\n" +
        "1. Login\n" +
        "2. Exit"
    );

    if (choice === null) return;

    if (choice === "1") {
        login();
    } else if (choice === "2") {
        alert("System shutting down...");
        return;
    } else {
        alert("Invalid option.");
        mainMenu();
    }
}
// mainMenu();

function login() {
    let username = prompt("Enter username:");
    if (username === null) {
        mainMenu();
        return;
    }

    if(!bankData[username]) {
        alert("User not found.");
        login();
        return;
    }
    let pin = prompt("Enter PIN:");
    if (pin === null) {
        mainMenu();
        return;
    }

    if(pin === bankData[username].pin) {
        alert("Welcome," + username + "!");
        dasboard(username);
    } else{
        alert("Incorrect PIN.");
        login();
    }
}


function dasboard(user) {
    let choice = prompt(
        "=== DASHBOARD ===\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +    
        "3. Withdraw\n" +
        "4. Transfer\n" +
        "5. View Transaction History\n" +
        "6. Change PIN\n" +
        "7. Logout"
    )

    if (choice === null) {
        dasboard(user);
        return;
    }

    if (choice === "1") {
        checkBalance(user);
    } else if (choice === "2") {
        deposit(user);
    } else if (choice === "3") {
        withdraw(user);
    } else if (choice === "4") {
        transfer(user);
    } else if (choice === "5") {
        viewHistory(user);
    } else if (choice === "6") {
        changePin(user);
    } else if (choice === "7") {
        alert("Logging out...");
        mainMenu();
    } else {
        alert("Invalid option.");
        dasboard(user);
    }
}

function checkBalance(user) {
    alert("Your balance is: $" + bankData[user].balance);
    dasboard(user); 
}

function deposit(user) {
    let amount = prompt("Enter amount to deposit:");

    if (amount === null){
        dasboard(user);
        return;
    }

    amount = Number(amount);
    
    if(isNaN(amount) || amount <= 0) {
        alert("Invalid amount.");
        deposit(user);
        return;
    }

    bankData[user].balance += Number(amount);
    bankData[user].history.push("Deposited: $" + amount + "  "  + new Date().toLocaleString());

    alert("Deposit successful.");
    dasboard(user);
}

function withdraw(user) {
    let amount = prompt("Enter amount to withdraw:");

    if(amount === null) {
        dasboard(user);
        return;
    }
    amount = Number(amount);

    if(isNaN(amount) || amount <= 0){
        alert("Invalid amount.");
        withdraw(user);
        return;
    }

    if (amount > bankData[user].balance){
        alert("Insufficient funds.");
        withdraw(user);
        return;
    }

    let confirm = prompt("Confirm withdrawal of $" + amount + "?");
    if(!confirm){
        dasboard(user);
        return;
    }

    bankData[user].balance -= amount;
    bankData[user].history.push("Withdrew: $" + amount + " " + new Date().toLocaleString());

    alert("Withdrawal successful.");
    dasboard(user);

}

function transfer(user){
    let target = prompt("transfer to (username):");

    if(target === null){
        dasboard(user);
        return;
    }

    if(!bankData[target]){
        alert("User not found.");
        transfer(user);
        return; 
    }

    if(target === user) {
        alert("You cannot transfer to yourself.");
        transfer(user);
        return;
    }

    let amount = prompt("Enter amount to transfer:");

    if(amount === null) {
        dasboard(user);
        return;
    }

    amount = Number(amount);

    if(isNaN(amount)|| amount <= 0){
        alert("invalid amount.");
        transfer(user);
        return;
    }

    if(amount > bankData[user].balance){
        alert("Insufficient funds.");
        transfer(user);
        return;
    }

    bankData[user].balance -= amount;
    bankData[target].balance += amount;

    bankData[user].history.push("Send $" + amount + " to " + target);
    bankData[target].history.push("Recived" + amount + "from" + user);

    alert("Transfer successful.");
    dasboard(user);
};

function viewHistory(user, index , output){

    if (index === undefined) index = 0;
    if (output === undefined) output = "";

    if(index >= bankData[user].history.length){
        if(output === ""){
            alert("No transaction history.");
        } else {
            alert("Transaction History:\n" + output);
        }
        dasboard(user);
        return;
    }

    output += bankData[user].history[index] + "\n";
    viewHistory (user, index + 1, output);

}

function changePin (user){
    let currentPin = prompt ("Enter current PIN:");
    if(currentPin === null){
        dasboard (user);
        return;
    }

    if (currentPin !== bankData[user].pin){
        alert ("Incorrect PIN.");
        changePin(user);
        return;
    }

    let newPin = prompt("Enter new PIN:");

    if(newPin === null){
        alert("invalid PIN.");
        changePin(user);
        return;
    }

    bankData[user].pin = newPin;
    alert("PIN changed successfully.");
    dasboard(user);
}
mainMenu();