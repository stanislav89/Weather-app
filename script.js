const container = document.querySelector('.container');
const error404 = document.querySelector('.not-found');
const search = document.querySelector('.search-row button');
const weatherArea = document.querySelector('.weather-area');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const ApiKey = '640b18626b515cb537c5866adcaf5fc4';
    const city = document.querySelector('.search-row input').value;

    if (city === '')
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
});