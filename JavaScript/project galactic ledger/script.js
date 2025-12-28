const bankData = {
  sectors: {
    Mars: { tax: 0.07 },
    Earth: { tax: 0.04 },
    Belt: { tax: 0.10 }
  },

  exchangeRates: {
    Credits: 1,
    Gold: 50,
    Oxygen: 5,
    Scrip: 0.5
  },

  users: [
    {
      id: 1,
      username: "neo",
      pin: 1111,
      secret: "matrix",
      sector: "Mars",
      currency: "Credits",
      balance: 1000,
      status: "active",
      history: []
    },
    {
      id: 2,
      username: "trinity",
      pin: 2222,
      secret: "zion",
      sector: "Earth",
      currency: "Gold",
      balance: 20,
      status: "active",
      history: []
    },
    {
      id: 3,
      username: "john",
      pin: 3333,
      secret: "coding",
      sector: "Belt",
      currency: "Oxygen",
      balance: 500,
      status: "locked",
      history: []
    },
    {
  id: 4,
  username: "morpheus",
  pin: 4444,
  secret: "freedom",
  sector: "Mars",
  currency: "Scrip",
  balance: 800,
  status: "active",
  history: []
},
{
  id: 5,
  username: "oracle",
  pin: 5555,
  secret: "future",
  sector: "Earth",
  currency: "Credits",
  balance: 1500,
  status: "active",
  history: []
},
{
  id: 6,
  username: "smith",
  pin: 6666,
  secret: "virus",
  sector: "Belt",
  currency: "Gold",
  balance: 300,
  status: "active",
  history: []
},
{
  id: 7,
  username: "tank",
  pin: 7777,
  secret: "engine",
  sector: "Mars",
  currency: "Oxygen",
  balance: 950,
  status: "active",
  history: []
},
{
  id: 8,
  username: "dozer",
  pin: 8888,
  secret: "sleep",
  sector: "Earth",
  currency: "Scrip",
  balance: 400,
  status: "active",
  history: []
}
  ]
};



function startApp() {
  const name = prompt("Enter username:");
  const user = findUser(name, 0);

  if (!user) {
    alert("USER NOT FOUND");
    return startApp(); 
  }

  const ok = authenticate(user, 2); 

  if (ok) {
    dashboard(user);
  } else {
    return startApp();
  }
}

function authenticate(user, step) {
  if (user.status === "locked") {
    alert("ACCOUNT LOCKED");
    return startApp();
  }


  if (step === 2) {
    const p = Number(prompt("PIN:"));
    if (p === user.pin) return authenticate(user, 3);
    user.status = "locked";
    alert("WRONG PIN");
    return false;
  }

  if (step === 3) {
    const s = prompt("Secret word:");
    if (s === user.secret) return authenticate(user, 4);
    user.status = "locked";
    alert("WRONG SECRET");
    return false;
  }

  if (step === 4) {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const ans = prompt("Captcha: " + a + " + " + b);

    if (Number(ans) === a + b) {
      alert("ACCESS GRANTED");
      return true;
    }

    user.status = "locked";
    alert("FAILED CAPTCHA");
    return false;
  }
}

function dashboard(user) {
  const choice = prompt(
    "=== SPACE BANK DASHBOARD ===\n" +
    "1. View Balance\n" +
    "2. Pay Bills\n" +
    "3. Transfer Money\n" +
    "4. View History\n" +
    "5. Apply Interest\n" +
    "6. Logout\n\n" +
    "Enter choice (1-6):"
  );

  if (choice === "1") {
    alert("Balance: " + user.balance);
    return dashboard(user);
  }

  if (choice === "2") {
    payBills(user);
    return dashboard(user);
  }

  if (choice === "3") {
    const targetName = prompt("Send to user:");
    const target = findUser(targetName, 0);

    if (!target) {
      alert("USER NOT FOUND");
      return dashboard(user);
    }

    const amount = Number(prompt("Amount:"));
    transfer(user, target, amount);
    return dashboard(user);
  }

  if (choice === "4") {
    showHistory(user.history, 0);
    return dashboard(user);
  }

  if (choice === "5") {
    const rate = Number(prompt("Monthly interest (e.g. 0.02):"));
    user.balance = interest(user.balance, rate, 0);
    alert("Interest applied.\nNew Balance: " + user.balance);
    return dashboard(user);
  }

  if (choice === "6") {
    alert("Logged out.");
    return startApp();
  }

  alert("INVALID OPTION");
  return dashboard(user);
}


function findUser(name, i) {
  if (i >= bankData.users.length) return null;
  if (bankData.users[i].username === name) return bankData.users[i];
  return findUser(name, i + 1);
}

function payBills(user) {
  const life = Number(prompt("Life Support:"));
  const fuel = Number(prompt("Fuel:"));
  const net = Number(prompt("Internet:"));

  if (life <= 0 || fuel <= 0 || net <= 0) {
    alert("INVALID BILL");
    return;
  }

  const total = life + fuel + net;

  if (user.balance < total) {
    alert("INSUFFICIENT FUNDS");
    return;
  }

  user.balance -= total;
  user.history.push("Paid bills -> Life: " + life + ", Fuel: " + fuel + ", Net: " + net);

  alert("BILLS PAID");
}

function transfer(sender, receiver, amount) {
  if (sender.balance < amount) {
    alert("NOT ENOUGH FUNDS");
    return;
  }

  const taxRate = getSectorTax(sender.sector, receiver.sector);
  const taxAmount = amount * taxRate;
  const totalDeduction = amount + taxAmount;

  if (sender.balance < totalDeduction) {
    alert("NOT ENOUGH FUNDS TO COVER TAX");
    return;
  }

  const convertedAmount = convert(
    amount,
    sender.currency,
    receiver.currency
  );

  sender.balance -= totalDeduction;
  receiver.balance += convertedAmount;

  sender.history.push(
    "Sent " + amount + " " + sender.currency +
    " to " + receiver.username +
    " (Tax: " + taxAmount.toFixed(2) + ")"
  );

  receiver.history.push(
    "Received " + convertedAmount.toFixed(2) +" " + receiver.currency +
    " from " + sender.username
  );

  alert("TRANSFER COMPLETE\n" +
    "Sent: " + amount + "\n" +
    "Tax: " + taxAmount.toFixed(2) + "\n" +
    "Total Deducted: " + totalDeduction.toFixed(2));
}

function convert(amount, from, to) {
 const base = amount * bankData.exchangeRates[from];
 return base / bankData.exchangeRates[to];
}

function showHistory(history, index) {
  if (index >= history.length) {
    alert("End of history");
    return;
  }

  alert((index + 1) + ". " + history[index]);
  return showHistory(history, index + 1);
}

function interest(balance, rate, month) {
  if (month === 12) return balance;
  return interest(balance + balance * rate, rate, month + 1);
}

function getSectorTax(senderSector, receiverSector) {
  
  if (senderSector === receiverSector) {
    return 0.01;
  }

  if (senderSector === "Mars" && receiverSector === "Earth") {
    return 0.07;
  }

  if (senderSector === "Mars" && receiverSector === "Belt") {
    return 0.09;
  }

  if (senderSector === "Earth" && receiverSector === "Mars") {
    return 0.05;
  }

  if (senderSector === "Earth" && receiverSector === "Belt") {
    return 0.06;
  }

  if (senderSector === "Belt" && receiverSector === "Mars") {
    return 0.10;
  }

  if (senderSector === "Belt" && receiverSector === "Earth") {
    return 0.08;
  }

  
  return 0.1;
}

startApp();
