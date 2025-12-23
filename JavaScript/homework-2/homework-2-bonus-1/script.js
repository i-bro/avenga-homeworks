function loginCheck() {
    const correctPassword = "js2025";

    const attempt1 = prompt("Enter password (Attempt 1):");
    if (attempt1 === correctPassword) {
        alert("Login successful");
    } else {
        const attempt2 = prompt("Incorrect password. Attempt 2:");
        if (attempt2 === correctPassword) {
            alert("Login successful");
        } else {
            const attempt3 = prompt("Incorrect password. Attempt 3:");
            if (attempt3 === correctPassword) {
                alert("Login successful");
            } else {
                alert("Access denied");
            }
        }
    }
}

loginCheck();