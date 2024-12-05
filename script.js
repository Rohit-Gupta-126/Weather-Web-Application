const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0bad4b3cb6mshf9e4784bf44ea17p195617jsn444557cc927d',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // Use .json() to parse the response as JSON
        console.log(result);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the async function
fetchWeather();