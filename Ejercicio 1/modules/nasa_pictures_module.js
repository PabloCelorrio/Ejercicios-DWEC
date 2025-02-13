
function fetchAPOD() {
    const date = document.getElementById('date').value;
    const apiKey = 'DEMO_KEY';
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('explanation').textContent = data.explanation;
            document.getElementById('apodImage').src = data.url;
        })
        .catch(error => console.error('Error obteniendo la imagen:', error));
}

export {fetchAPOD};