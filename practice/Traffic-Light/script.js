let currentColor = "Red";

const lightDisplay = document.getElementById("lightDisplay");
const lightBtn = document.getElementById("lightBtn");

lightBtn.addEventListener("click" ,function () {
    if (currentColor === "Red") {
        currentColor = "Yellow";
        lightDisplay.textContent = "Yellow";
    }
    else if(currentColor==="Yellow") {
        currentColor = "Green";
        lightDisplay.textContent = "Green";
    }
    else {
        currentColor = "Red";
        lightDisplay.textContent ="Red";
    }

});