const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
    convertBtn.setAttribute("disabled", "");

    // Re-enable button after 4 seconds
    setTimeout(() => {
        convertBtn.removeAttribute("disabled");
    }, 4000);
});

// Optional: Enable/disable button dynamically when user types
degree.addEventListener("input", () => {
    if (degree.value.trim() === "") {
        convertBtn.setAttribute("disabled", "");
    } else {
        convertBtn.removeAttribute("disabled");
    }
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    convertBtn.innerHTML = `<span class='icon'><i class='fa-solid fa-spinner'></i> Connecting...</span>`;
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);
});

function convertToCelsius() {
    const inputValue = parseFloat(degree.value);

    if (isNaN(inputValue)) {
        celsiusField.innerHTML = "Please enter a valid number.";
        return;
    }

    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;C`;
        } else {
            celsiusField.innerHTML = "Please select a valid temperature type.";
        }
    }, 1200);
}
