// Get the current time
const currentTime = new Date();
const hours = currentTime.getHours();

// Define a greeting based on the current time
let greeting;
if (hours < 12) {
    greeting = "Good morning!";
} else if (hours < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

// Display the greeting in an alert box
alert(greeting);


// Button that changes color when clicked
const colorChangeButton = document.getElementById("colorChangeButton");
colorChangeButton.addEventListener("click", changeColor);

function changeColor() {
    const colors = ["red", "green", "blue", "yellow", "orange"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorChangeButton.style.backgroundColor = randomColor;
}

// Calculator that adds two numbers
const addButton = document.getElementById("addButton");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultElement = document.getElementById("result");

addButton.addEventListener("click", addNumbers);

function addNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers.";
    } else {
        const sum = num1 + num2;
        resultElement.textContent = `Result: ${sum}`;
    }
}
