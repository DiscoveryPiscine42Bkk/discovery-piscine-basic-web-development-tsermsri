// Function to generate a random number between 0 and 255
function getRandomColorValue() {
    return Math.floor(Math.random() * 256);
}

// Function to generate a random RGB color
function getRandomColor() {
    const r = getRandomColorValue();
    const g = getRandomColorValue();
    const b = getRandomColorValue();
    return `rgb(${r}, ${g}, ${b})`;
}

// Select the button and add an event listener
document.getElementById("change-bg-button").addEventListener("click", function() {
    // Change the background color of the body to a random color
    document.body.style.backgroundColor = getRandomColor();
});