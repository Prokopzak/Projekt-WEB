// Funkce pro výpočet energie potřebné k ohřevu materiálu
function calculateEnergy(material, mass, temperatureChange) {
    return mass * material.specificHeat * temperatureChange;
}

// Pole s různými materiály a jejich měrnou tepelnou kapacitou
const materials = [
    { name: 'voda', specificHeat: 4.18 },
    { name: 'hliník', specificHeat: 0.897 },
    { name: 'železo', specificHeat: 0.450 }
];

// Funkce pro zobrazení výsledku na stránce
function displayResult() {
    const outputDiv = document.getElementById('output');
    const materialSelect = document.getElementById('material');
    const massInput = document.getElementById('mass');
    const temperatureInput = document.getElementById('temperature');

    const selectedMaterial = materials.find(material => material.name === materialSelect.value);
    const mass = parseFloat(massInput.value);
    const temperatureChange = parseFloat(temperatureInput.value);

    if (!isNaN(mass) && !isNaN(temperatureChange) && selectedMaterial) {
        const energy = calculateEnergy(selectedMaterial, mass, temperatureChange);
        outputDiv.innerHTML = `Potřebná energie k ohřevu ${mass} kg ${selectedMaterial.name} o ${temperatureChange} °C je ${energy.toFixed(2)} J.`;

        // Vykreslení grafického zobrazení změny teploty
        drawTemperatureChange(selectedMaterial, temperatureChange);
    } else {
        outputDiv.innerHTML = '<span style="color: red;">Prosím, vyplňte všechna pole správně.</span>';
    }
}

// Funkce pro vykreslení grafického zobrazení změny teploty
function drawTemperatureChange(material, temperatureChange) {
    const canvas = document.getElementById('temperatureCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;

    const startX = 50;
    const endX = width - 50;
    const startY = height / 2;
    const endY = height / 2 - temperatureChange * 10;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.stroke();
}
var datum = new Date()
var den = datum.getDate()
var mesic = datum.getMonth()+1
var rok = datum.getFullYear()
document.write("<strong>" + "Dnešní datum: " + den + "." +" " + mesic + "." + " " + rok + "</strong>")

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}


