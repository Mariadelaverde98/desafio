const Locations = require('../models/locations.model');

async function addLocation(req, res) {
    try {
        const location = await Locations.create({
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        });
        res.status(201).json({
            location: location,
        });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addLocation
}