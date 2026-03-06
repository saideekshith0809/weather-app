async function getWeather(){

const city = document.getElementById("city").value;

const apiKey = "YOUR_API_KEY";

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);
const data = await response.json();

document.getElementById("weatherResult").innerHTML =
`
<h3>${data.name}</h3>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].main}</p>
`;

}
catch(error){
document.getElementById("weatherResult").innerHTML =
"City not found";
}

}
