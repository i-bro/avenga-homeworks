const numbers = [1, 22, 33, 54, 15, 26, 37, 28, 19, 10];
const ul = document.createElement("ul");
const h3 = document.createElement('h3');
let sum = 0;


for (let num of numbers) {
    ul.innerHTML += `<li>${num}</li>`;
    sum += num;
}


let equation = "";

for (let i = 0; i < numbers.length; i++) {
  equation += numbers[i];

  if (i < numbers.length - 1) {
    equation += " + ";
  }
}
equation += " = " + sum;

h3.textContent = `Sum: ${equation}`;

document.body.appendChild(ul);
document.body.appendChild(h3);