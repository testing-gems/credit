// index.js

const form = document.getElementById('transaction-form');
const resultContainer = document.getElementById('result-container');
const predictionText = document.getElementById('prediction-text');
const anotherTransactionBtn = document.getElementById('another-transaction-btn');

// Function to handle form submission
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    // Collect form input values
    const time = parseFloat(form.elements['time'].value);
    const amount = parseFloat(form.elements['amount'].value);
    const v1 = parseFloat(form.elements['v1'].value);
    const v2 = parseFloat(form.elements['v2'].value);

    // Prepare data for prediction
    const transactionData = { Time: time, Amount: amount, V1: v1, V2: v2 };

    // Example of predicting a single transaction (replace with your actual prediction function)
    const dtPrediction = await predictSingleTransaction(transactionData);
    const predictionResult = dtPrediction === 1 ? 'Fraud' : 'Genuine';

    // Update UI with prediction result
    predictionText.textContent = `Decision Tree Classifier Prediction: ${predictionResult}`;
    resultContainer.classList.remove('hidden');
});

// Function to handle "Check Another Transaction" button click
anotherTransactionBtn.addEventListener('click', function() {
    resultContainer.classList.add('hidden');
    form.reset(); // Reset form fields
});

// Example function to simulate prediction (replace with your actual prediction logic)
function predictSingleTransaction(transactionData) {
    return new Promise((resolve, reject) => {
        // Simulating delay for asynchronous operation (replace with actual prediction logic)
        setTimeout(() => {
            const randomPrediction = Math.random() < 0.5 ? 0 : 1; // Simulating 50% probability for demonstration
            resolve(randomPrediction);
        }, 1000); // Simulating delay of 1 second
    });
}
