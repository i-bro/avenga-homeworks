const dogResult = document.getElementById('dogResult');
const humanResult = document.getElementById('humanResult');
const calcDog = document.getElementById('calcDog');
const calcHuman = document.getElementById('calcHuman');

function humanToDogYears() {
    
    const dogYears = document.getElementById('dogYears').value;
    if (dogYears <= 0 || isNaN(dogYears)) {
        dogResult.innerHTML = 'Please enter a valid age';
        return;
    }
    const dog = dogYears * 7;
    dogResult.innerHTML =`your dog is ${dog.toFixed(2)} years old in dog years`;
}   
 
function dogToHumanYears() {
    const humanYears = document.getElementById('humanYears').value;
    if (humanYears <= 0 || isNaN(humanYears)) {
        humanResult.innerHTML = 'Please enter a valid age';
        return;
    }
    const human = humanYears / 7;
    humanResult.innerHTML =`your dog is ${human.toFixed(2)} years old in human years`;
}

calcDog.addEventListener("click", humanToDogYears);
calcHuman.addEventListener("click", dogToHumanYears);
