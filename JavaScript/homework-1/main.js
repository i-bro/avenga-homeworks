
const totalDiv = document.getElementById('total');
const button = document.getElementById('button');

const taxPercent = 5;
const taxRate = taxPercent / 100;
const iphonePrice = 119.95;

button.addEventListener('click', function(event) {

    event.preventDefault();
    const quantity = document.getElementById('iphone').value;
    const subTotal = iphonePrice * quantity;
    const taxAmount = subTotal * taxRate;
    const totalPrice = subTotal + taxAmount;
    totalDiv.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;

})
