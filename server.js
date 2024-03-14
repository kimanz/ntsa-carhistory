const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(__dirname))
// Car data
const carData = {
  "cars": [
    {
      "id": 1,
      "chassisNumber": "ABC123456789",
      "make": "Toyota",
      "model": "Corolla",
      "owner": "Kimanzi Mike",
      "year": 2020,
      "mileage": 255020,
      "engineNumber": "RR3R3R3RFE/.RURUDJ"
    },
    {
      "id": 2,
      "chassisNumber": "DEF987654321",
      "make": "Honda",
      "model": "Accord",
      "owner": "Jennifer Smith",
      "year": 2018,
      "mileage": 150000,
      "engineNumber": "RT4T5T6T7G/.XWETD"
    },
    {
      "id": 3,
      "chassisNumber": "GHI654321098",
      "make": "Ford",
      "model": "Mustang",
      "owner": "John Doe",
      "year": 2019,
      "mileage": 80000,
      "engineNumber": "KJ7J8J9JK1/.MNBVC"
    }
  ]
};

// Endpoint to serve the car data
app.get('/api/car_data', (req, res) => {
    res.json(carData);
});

// Start the server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, (err) => {
    if (err) {
        console.error('Server failed to start:', err.message);
        return;
    }
    console.log(`Server is running on port ${PORT}`);
});
server.on('error', (err) => {
    console.error('Server failed to start:', err.message);
});
