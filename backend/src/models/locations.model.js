const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var current = new Date()

const locationSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default:  new Date(Date.UTC(current.getFullYear(), 
        current.getMonth(),current.getDate(),current.getHours(), 
        current.getMinutes(),current.getSeconds()))
    },
    lat: {
        type: String,
        required: true,
        default: ''
    },
    lng: {
        type: String,
        required: true,
        default: ''
    }
}, { timestamps: { createdAt: true, updatedAt: false } })

module.exports = mongoose.model('Locations', locationSchema);