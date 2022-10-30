const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, `{PATH} must be present`],
        minlength: [2, `{PATH} must be at least 2 characters long`]
    },
    model: {
        type: String,
        required: [true, `{PATH} must be present`],
        minlength: [2, `{PATH} must be at least 2 characters long`]
    },
    year: {
        type: Number,
        required: [true, `{PATH} must be present`],
        minlength: [1950, `{PATH} must be  at least from 1950 or newer `]
    },
    image: {
        type: String,
        required: [true, `{PATH} must be present`],
        minlength: [1, `{PATH} must be submitted`]
    },
    price: {
        type: Number,
        required: [true, `{PATH} must be present`],
        minlength: [1950, `{PATH} must be  at least from the year 1950 or newer `]
    },
    mileage: {
        type: Number,
        required: [true, `{PATH} must be present`],
        minlength: [1, `{PATH} must be  at least 1 mile`]
    },
    color: {
        type: String,
        required: [true, `{PATH} must be present`],
        minlength: [1, `{PATH} must have a color`]
    }
},{timestamps:true});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;