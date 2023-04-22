function convert() {
    let temp_celsius = document.getElementById('temp_celsius').value;
    let temp_fahrenheit = (9 / 5) * temp_celsius + 32;
    temp_fahrenheit = Math.round(temp_fahrenheit * 10) / 10;
    alert(`Цельсий: ${temp_celsius}, Фаренгейт: ${temp_fahrenheit}`);
}