const temperatureIndicator = document.querySelector('.temperature-indicator')
const displayInfo = document.querySelector('.display-info');

let contadora = 0;
let sobe = true;

console.log(temperatureIndicator)

setInterval(async () => {
  const teste = await requestLocal();
  const result = await teste.json();
  temperatureIndicator.style.height = parseInt(result.altura) - 2 + 'px';
  displayInfo.textContent = parseInt(result.altura) / 2
  }, 5)

function requestLocal() {
  return fetch('http://192.168.0.3:3333/teste-api');
}