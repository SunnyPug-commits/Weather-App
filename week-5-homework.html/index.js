//Date
let today = new Date();
formatDate(today);

function formatDate(currentDate) {
  let date = document.querySelector("#date");
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = currentDate.getDate();
  let weekDay = weekDays[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  date.innerHTML = `It is ${weekDay}, ${month} ${day}`;
}

function searchForm(event) {
  event.preventDefault();
  let input = document.querySelector("#search-city");
  console.log(input.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchForm);

//Temp and city display
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h4 = document.querySelector("#city");
  h4.innerHTML = message;
}

let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl).then(showTemperature);

//id city and id search-city
