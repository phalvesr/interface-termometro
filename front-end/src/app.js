const temperatureIndicator = document.querySelector('.temperature-indicator');
const displayInfo = document.querySelector('.display-info');

setInterval(async () => {
  const request = await requestLocal();
  const result = await request.json();
  temperatureIndicator.style.height = parseInt(result.altura) - 2 + 'px';
  displayInfo.textContent = parseInt(result.altura) / 2;
  }, 5)

function requestLocal() {
  return fetch('http://192.168.0.3:3333/teste-api');
}