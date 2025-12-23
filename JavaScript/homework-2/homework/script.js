const zodiacSigns = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];

    function getZodiacSign() {
        const yearInput = parseInt(document.getElementById("yearInput").value);

        if (isNaN(yearInput)) {
        document.getElementById("result").textContent = "Please enter a valid year.";
        return;
    }
        const index =(yearInput - 4) % 12;
        let fixedIndex ;
        if (index < 0) {
            fixedIndex = index + 12;
        } else {
            fixedIndex = index;
        }
        const zodiac = zodiacSigns[fixedIndex];

        document.getElementById("result").textContent =
        `The Chinese Zodiac sign for ${yearInput} is ${zodiac}.`;
    }