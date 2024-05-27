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
    } else {
        outputDiv.innerHTML = '<span style="color: red;">Prosím, vyplňte všechna pole správně.</span>';
    }
}

