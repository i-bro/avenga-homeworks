function checkDate() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);

    if (isNaN(day) || isNaN(month)) {
        alert("Error: Day and month must be numbers");
    } 
    else if (month < 1 || month > 12) {
        alert("Error: Month must be between 1 and 12");
    } 
    else if (day <= 0) {
        alert("Error: Day must be a positive number");
    } 
    else if (
        (month === 1 || month === 3 || month === 5 || month === 7 ||
         month === 8 || month === 10 || month === 12) && day > 31
    ) {
        alert("Error: This month has only 31 days");
    } 
    else if (
        (month === 4 || month === 6 || month === 9 || month === 11) && day > 30
    ) {
        alert("Error: This month has only 30 days");
    } 
    else if (month === 2 && day > 28) {
        alert("Error: February has only 28 days");
    } 
    else {
        alert("Correct date");
    }
}
