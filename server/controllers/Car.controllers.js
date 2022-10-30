const Car = require('../models/Car.models');


module.exports.findAllCars = (req, res) => {
    Car.find()
        .then(allDaCars => res.json( allDaCars )) //* dont put curly braces
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.findOneSingleCar = (req, res) => {
    Car.findOne({ _id: req.params.id })
        .then(oneSingleCar => res.json(oneSingleCar ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.createNewCars = (req, res) => {
    Car.create(req.body)
        .then(newlyCreatedCar => res.json( newlyCreatedCar ))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAnExistingCars = (req, res) => {
    Car.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}