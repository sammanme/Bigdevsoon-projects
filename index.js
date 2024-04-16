// Select the input field
var billInput = document.getElementById("billInput");
var tipButtons = document.querySelectorAll(".choose-a-tip button");

// Select elements
var tip10Button = document.getElementById("tip10");
var tip15Button = document.getElementById("tip15");
var tip20Button = document.getElementById("tip20");
var tip25Button = document.getElementById("tip25");
var splitselected = document.getElementById("split")
var tipOutputDiv = document.getElementById("output1");
var totalOutputDiv = document.getElementById("output2");
var perpersonOutputDiv = document.getElementById("output3");


// Initialize total sum variables
var totalSum = 0;
var totalWithTip = 0;
var perpersonTip = 0;


// Add event listener to listen for input changes
billInput.addEventListener("input", function() {
    // Get the value of the input field
    var inputValue = billInput.value;
    
    // Display the input value in the output div
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = "$" + inputValue;
});


// Add event listeners to tip buttons
tip10Button.addEventListener("click", function() {
    calculateTip(10);
});

tip15Button.addEventListener("click", function() {
    calculateTip(15);
});

tip20Button.addEventListener("click", function() {
    calculateTip(20);
});

tip25Button.addEventListener("click", function() {
    calculateTip(25);
});


// Function to calculate tip based on input value and tip percentage
function calculateTip(tipPercentage) {
    // Get bill total from input field
    var billTotal = parseFloat(billInput.value);

    // Calculate tip amount
    var tipAmount = (billTotal * tipPercentage) / 100;

    // Calculate total amount (bill total + tip amount)
    totalWithTip = billTotal + tipAmount;

    // Add tip amount to total sum
    totalSum += totalWithTip;

    //divide totalSum with any number selected

    // Display tip amount in output div
    tipOutputDiv.textContent = "$" + tipAmount.toFixed(2);

       // Display total amount in output2 div
       totalOutputDiv.textContent = "$" + totalWithTip.toFixed(2);
}

// Add event listener to listen for input changes
split.addEventListener("input", function() {
    // Get the value of the input field
    var splitvalue = split.value;
 // Display the input value in the output div
 var perptip = totalSum / splitvalue;
 perpersonOutputDiv.textContent = "$" + perptip.toFixed(2);
});

// Select the reset button
var resetButton = document.getElementById("resetButton");

// Add event listener to reset button
resetButton.addEventListener("click", function() {
    // Clear bill input field
    billInput.value = "";

    // Clear output divs
    var outputDiv = document.getElementById("output");
    var tipOutputDiv = document.getElementById("output1");
    var totalOutputDiv = document.getElementById("output2");
    var perpersonOutputDiv = document.getElementById("output3");

    outputDiv.textContent = "";
    tipOutputDiv.textContent = "";
    totalOutputDiv.textContent = "";
    perpersonOutputDiv.textContent = "";

    // Reset total sum variables
    totalSum = 0;
    totalWithTip = 0;
    perpersonTip = 0;
});


