
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('weather-form');
    const weatherInfo = document.getElementById('weather-info');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const city = document.getElementById('city').value;
        const apiKey = '0d8c0e297c7aec70d9beb0abe83358c8';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Error fetching weather:', error.message);
            weatherInfo.textContent = 'Error fetching weather. Please try again.';
        }
    });

    function displayWeather(data) {
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;

        weatherInfo.innerHTML = `
            <div class="weather-card">
                <h2>Weather in ${name}</h2>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Description:</strong> ${description}</p>
            </div>
        `;
    }
});
