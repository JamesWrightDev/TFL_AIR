var request = new XMLHttpRequest();

request.open('GET', 'https://api.tfl.gov.uk/AirQuality', true);
request.onload = function() {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    const todayCard = document.getElementById('today');
    const tomorrowCard = document.getElementById('tomorrow');



    //GET today and tomorrows forecast. 	
    let todayForecast = data.currentForecast[0].forecastBand;
    let tomorrowForecast = data.currentForecast[1].forecastBand;
    console.log(data)


    //Fucntion adds the class for the forecast
    // A is the element B is the forecast;
    let warn = (a, b) => {
        const card = a;;
        const forecast = b;
        const p = document.createElement('p');




        console.log(p);
        if (forecast == 'Low') {
            let warn = 'warn--low';
            p.textContent = forecast;
            p.classList.add('headline--primary');
            card.appendChild(p);
            card.classList.add(warn);

        } else if (b == 'Moderate') {
            let warn = 'warn--moderate';
            p.textContent = forecast;
            p.classList.add('headline--primary');
            card.appendChild(p);
            card.classList.add(warn);
        } else if (b == 'High') {
            let warn = 'warn--moderate';
            p.textContent = forecast;
            p.classList.add('headline--primary');
            card.appendChild(p);
            card.classList.add(warn);
        } else if (b == 'Very High') {
            let warn = 'warn--veryhigh';
            p.textContent = forecast;
            p.classList.add('headline--primary');
            card.appendChild(p);
            card.classList.add(warn);
        } else {
            console.log('Error')

        }
    }

    //Call function on both elements
    warn(todayCard, todayForecast);
    warn(tomorrowCard, tomorrowForecast);

}

request.send();