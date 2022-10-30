const CarController = require('../controllers/Car.controllers');

module.exports = app => {
    app.get('/api/car', CarController.findAllCars); 
    app.get('/api/car/:id', CarController.findOneSingleCar); //find one
    app.post('/api/car', CarController.createNewCars); //create
    app.delete('/api/car/:id', CarController.deleteAnExistingCars); //delete
}