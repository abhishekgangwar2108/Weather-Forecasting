async function weather(){
    var ci = document.querySelector("#search input").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ci}&appid=8cc217bcacb33fa1dd6efcb2d30f370b`;
    const res = await fetch(url);
    var data = await res.json();
    console.log(data);

    if(data.cod=="404"){
        main.style.display = "none";
        error.style.display = "block";
    }
    else{
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        city.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";
        error.style.display = "none";
        main.style.display = "block";
    }
}
