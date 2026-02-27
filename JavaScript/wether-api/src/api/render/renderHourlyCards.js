export function renderHourlyCards(hourlyData){
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = "";

    for(let i = 0; i < hourlyData.time.length; i++){
        const hourString = new Date(hourlyData.time[i]).toLocaleString([], {hour: '2-digit', minute:'2-digit'});
        const temperature = hourlyData.temperature_2m[i];
        // const humidity = hourlyData.relative_humidity_2m[i];
        const precipitation = hourlyData.precipitation_probability[i];
        // const windSpeed = hourlyData.wind_speed_10m[i];

        const cardDiv = `
        <div class="hourly-card-container">
        <div class="hourly-card-temperature"> ${Math.round(temperature)}°C</div>
        <div class="hourly-card-hour">${hourString}</div>
        <div class="hourly-card-precipitation">${Number(precipitation) > 0 ? String(precipitation) + "%" : ""}</div>
        
        </div>`;

        cardsContainer.innerHTML += cardDiv;
    }
}