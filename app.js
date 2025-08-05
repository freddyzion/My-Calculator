const keys = document.querySelectorAll(".numbers");
const display = document.querySelector(".input");
const clearAll = document.querySelector("#clearAll");
const equals = document.querySelector("#equals");

clearAll.addEventListener("click", e => {
    display.textContent = "";
});

keys.forEach((key) => {
    key.addEventListener("click", (e) => {
        display.textContent += key.textContent;
    });
});

equals.addEventListener("click", () => {
    try {
        display.textContent = eval(display.textContent);
    } catch(error) {
        display.textContent = "Error";
    }
});
