function getFullNames(firstNames, lastNames) {
    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }

    return fullNames;
}

let first = ["Bob", "Jill", "Mark", "Anna", "Tom", "Sara", "Leo"];
let last  = ["Gregory", "Wurtz", "Johnson", "Smith", "Brown", "Miller", "Wilson"];

console.log(getFullNames(first, last));