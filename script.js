// Obtener referencias a los elementos de la interfaz
const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');

const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

// Función para convertir RGB a código hexadecimal
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Función para convertir un valor hexadecimal a RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

// Función para actualizar el color y el código hexadecimal
function updateColor() {
    const red = parseInt(redRange.value);
    const green = parseInt(greenRange.value);
    const blue = parseInt(blueRange.value);

    const hex = rgbToHex(red, green, blue);
    colorBox.style.backgroundColor = hex;
    hexCode.textContent = hex;
    colorPicker.value = hex;

    // Actualizar los campos de texto para que coincidan con los deslizantes
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
}

// Función para actualizar los deslizantes cuando se escriben valores en los campos de texto
function updateRangeFromInput() {
    const red = parseInt(redInput.value);
    const green = parseInt(greenInput.value);
    const blue = parseInt(blueInput.value);

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    updateColor();
}

// Función para actualizar los controles deslizantes y campos de texto desde el selector de color
function updateFromColorPicker() {
    const rgb = hexToRgb(colorPicker.value);

    redRange.value = rgb.r;
    greenRange.value = rgb.g;
    blueRange.value = rgb.b;

    updateColor();
}

// Event listeners para actualizar el color cuando cambian los controles deslizantes
redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

// Event listeners para actualizar el color cuando se cambian los valores en los campos de texto
redInput.addEventListener('input', updateRangeFromInput);
greenInput.addEventListener('input', updateRangeFromInput);
blueInput.addEventListener('input', updateRangeFromInput);

// Event listener para actualizar el color cuando se cambia el selector de color
colorPicker.addEventListener('input', updateFromColorPicker);
