require('./index.css');
import Weather from './Weather';
import UI from './UI';
import Store from './Store';

const btn = document.getElementById('w-change-btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    runApp();
});

document.addEventListener('DOMContentLoaded', reloadApp);

let store = new Store();
let ui = new UI();


function runApp() {
    let data = ui.getData();
    let weather = new Weather(data[0], data[1]);
    store.setLocationData(data[0], data[1]);
    weather.fetchWeather()
        .then(data => {
            ui.render(data);
            
        })
        .catch(err => {
            console.log(err);
        })
}

function reloadApp() {
    let storeData = store.getLocationData();
    let weather = new Weather(storeData.city, storeData.country);
    weather.fetchWeather()
        .then(data => {
            ui.render(data);
        })
        .catch(err => {
            console.log(err);
        })
}

