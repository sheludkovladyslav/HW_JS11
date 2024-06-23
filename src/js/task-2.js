const weather = {
  temperature: parseFloat(document.getElementById("temperature__input").value),
  humidity: 3,
  windSpeed: 25,

  temperatureChecker() {
    return this.temperature >= 0;
  },
};

document.getElementById("temperature-check").addEventListener("click", () => {
  weather.temperature = parseFloat(
    document.getElementById("temperature__input").value
  );

  if (weather.temperatureChecker()) {
    alert("температура вище 0 або 0");
  } else {
    alert("температура нижче 0");
  }
});
