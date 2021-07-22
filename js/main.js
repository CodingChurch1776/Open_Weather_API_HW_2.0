const form = document.getElementById('weather-search-form')
console.log(form)

form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#city')

    console.log(event)
    console.log(query_first)
})

const getData = async () => {
    let city=document.querySelector('#city').value;
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6945ba22a14bdf24d86e8c929a9d18e1&units=imperial`)
    console.log(response.data)
    return response.data
}

// const DOM_ELEMENTS = {
//     weather_data:'#weather-data'
// }
//     high_temp: '.high_temp',
//     low_temp: '.low_temp',
//     forecast: '.forecast',
//     humidity: '.humidity'
// }

//  creation of weather data html

const create_weather_table = (temp_max,temp_min,pressure,humidity) => {
    const weather_table=`
        <tr class="weather_object">
            <td>${temp_max}</td>
            <td>${temp_min}</td>
            <td>${pressure}</td>
            <td>${humidity}</td>
        </tr>`;
    document.querySelector(DOM_ELEMENTS.weather_report).insertAdjacentHTML('beforeend', weather_table)
}
const load_data = async()=>{
    const weather_data = await getData();
    let weather_object = weather_data.main.slice(2,6)
    weather_data.forEach( element => create_weather_table(element.temp_min, element.temp_max, element.pressure, element.humidity))

}


