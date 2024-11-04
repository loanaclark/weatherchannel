document.getElementById('btnEnviar').addEventListener('click', function() {
    const ciudad = document.getElementById('ciudad').value.trim(); // obtener la ciudad del input
    const apiKey = 'b8d1f68a9b1591a13db38ac8316c26b1'; // la api key que me asignó la página de OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    // solicitud a la API para obtener la temperatura actual de la ciudad
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
            return response.json();
        })
        .then(data => {
            const temperatura = data.main.temp; // obtener la temperatura actual
            document.getElementById('resultado').innerText = `La temperatura en ${data.name} es ${temperatura} °C.`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resultado').innerText = 'Ocurrió un error. Asegúrate de que la ciudad sea correcta.';
        });
});
