import express from 'express'; // If using ES modules
// const express = require('express'); // If using CommonJS

const app = express();

// Root URL route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// Example route
app.get('/addTwoNumbers/:firstNumber/:secondNumber', (req, res) => {
    const firstNumber = parseInt(req.params.firstNumber);
    const secondNumber = parseInt(req.params.secondNumber);
    const result = firstNumber + secondNumber;

    if (isNaN(result)) {
        res.status(400).json({ result: null, statusCode: 400 });
    } else {
        res.status(200).json({ result: result, statusCode: 200 });
    }
});

// Set the server to listen on port 3000 or any other port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
