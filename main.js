let form = document.getElementById('form-submit');
let buttonSubmit = document.querySelector('.btn-submit');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let country = document.getElementById('country').value;
    let url = `https://restcountries.com/v3.1/name/${country}`;
    buttonSubmit.disabled = true;
    buttonSubmit.innerHTML = 'Cargando...';
    axios.get(url)
    .then((response) => {
        let countryData = response.data[0];
        let countryName = countryData.name.common;
        let countryOfficial = countryData.name.official;
        let currencieName = countryData.currencies[Object.keys(countryData.currencies)[0]].name;
        let region = countryData.region;
        let capital = countryData.capital[0];
        let area = countryData.area;
        document.getElementById('country').value = '';
        document.getElementById('country-name').innerHTML = countryName;
        document.getElementById('country-official').innerHTML = capital;
        document.getElementById('currencie-name').innerHTML = currencieName;
        document.getElementById('region').innerHTML = region;
        document.getElementById('capital').innerHTML = capital;
        document.getElementById('area').innerHTML = area;
    })
    .catch((error) => {
        console.log(error);
        alert('No se pudo obtener información del pais: ' + country);
    });
    document.getElementById('country').value = '';
    buttonSubmit.disabled = false;
    buttonSubmit.innerHTML = 'Buscar';
});