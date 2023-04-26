const APIKEY = '129639dc29ee93f0162a0bf807b58b69';
//Appel à l'API
let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) =>
        response.json().then((data) => 
        {
            console.log(data)
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = '<i class="fas fa-temperature-high"></i>' + data.main.temp;
            document.querySelector('#humidity').innerHTML = '<i class="fas fa-tint"></i>' + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = '<i class="fas fa-wind"></i>' + data.wind.speed + 'km/h';
        })).catch((err) => console.log('Erreur : ' + err)
    );
}

//Ecouteur d'evenement 

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
})
//Appel par defaut au chargement de la page
apiCall('Paris');