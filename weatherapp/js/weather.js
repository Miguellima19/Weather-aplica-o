if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
} else {
    loadWeather("Águas Santas, Porto", "");
}

$(document).ready(function () {
    setInterval(getWeather, 10000);
}
    
function loadWeather(location, woeid) {
    window.alert('Função');
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function (weather) {
            city = weather.city;
            temp = weather.temp + '&deg; ';
            wcode = '<img class="weathericon" scr="images/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
            humidity = weather.humidity + 'N';
            
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },
        
        error: function (error) {
            $(".error").html('<p>' + error + '</p>');
        }
    });
}
