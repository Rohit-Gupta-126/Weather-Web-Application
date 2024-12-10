const url = 'https://api.weatherstack.com/current?access_key=ab226d3f1c3099a57d27df578e4b7a07&query=Bhubaneswar';
const options = {
    method: 'GET'
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the async function
fetchWeather();