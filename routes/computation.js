const express = require('express');
const router = express.Router(); // Use router instead of app

// Function to select a Math function based on ID's last digit
function selectMathFunction(idLastDigit) {
    switch (idLastDigit) {
        case 0:
            return { fn: 'Math.abs', method: Math.abs };
        case 1:
            return { fn: 'Math.sqrt', method: Math.sqrt };
        case 2:
            return { fn: 'Math.cbrt', method: Math.cbrt };
        case 3:
            return { fn: 'Math.log', method: Math.log };
        case 4:
            return { fn: 'Math.exp', method: Math.exp };
        case 5:
            return { fn: 'Math.sin', method: Math.sin };
        case 6:
            return { fn: 'Math.cos', method: Math.cos };
        case 7:
            return { fn: 'Math.tan', method: Math.tan };
        case 8:
            return { fn: 'Math.floor', method: Math.floor };
        case 9:
            return { fn: 'Math.ceil', method: Math.ceil };
        default:
            return { fn: 'Math.abs', method: Math.abs };
    }
}

// Computation endpoint
router.get('/', (req, res) => { // Change 'app.get' to 'router.get'
    const idLastDigit = 1; // Replace with the actual last digit of your ID
    const mathFunction = selectMathFunction(idLastDigit);

    // Check if `x` parameter exists in the query; otherwise, use a random number
    const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100;
    const result = mathFunction.method(x);

    // Format the response message
    const response = `${mathFunction.fn} applied to ${x} is ${result}`;
    res.send(response);
});

module.exports = router; // Export router instead of app
