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

const DOM_ELEMENTS = {
    weather_data:'#data-table'
}

const create_weather_table = (temp_max,temp_min,forecast,humidity) => {
    const html=`<a href = "#" class ="list-group-item list-group item" > ${temp_max}${temp_min}${forecast}${humidity}</a>`;
    document.querySelector(DOM_ELEMENTS.data_table).insertAdjacentHTML('beforeend', html)
}

const load_data = async()=>{
    const weather_report = await getData();
    console.log(weather_report)
    let high = weather_report.main.temp_max
    document.querySelector('#high_temp').append(high + ' °F')
    let low = weather_report.main.temp_min
    document.querySelector('#low_temp').append(low + ' °F')
    let humidity = weather_report.main.humidity
    document.querySelector('#humidity').append(humidity + '%')
    let forecast = weather_report.weather[0].description
    document.querySelector('#forecast').append(forecast)
    console.log(forecast)


const clear_data = () => {
    document.getElementsByTagName().reset();
}


    //weather_report.forEach( element => create_weather_table(element.temp_max, element.temp_min, element.humidity))
    
    // weather_points = weatherdata.main.temp_max
    // console.log(weather_points)
}

//  creation of weather data html
{/* <tr class="weather_object">
            <td>${temp_max}</td>
            <td>${temp_min}</td>
            <td>${pressure}</td>
            <td>${humidity}</td>
</tr>`; */}


