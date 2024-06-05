const Location = require('../models/Location');

module.exports = {
  createLocation,
  getLocations,
  updateLocation,
  deleteLocation
};


// CREATE (POST)
async function createLocation(req, res) {
  try {
    const location = await Location.create(req.body);

    res.status(200).json(location);
  } catch (err) {
    res.status(400).json(err);
  }
}

// READ (GET)
async function getLocations(req, res) {
  try {
    const locations = await Location.find({});

    res.status(200).json(locations);
  } catch (err) {
    res.status(400).json(err);
  }
}

// UPDATE (PATCH)
async function updateLocation(req, res) {
  try {
    const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedLocation);
  } catch (err) {
    res.status(400).send(err);
  }
}

// DELETE (DELETE)
async function deleteLocation(req, res) {
  try {
    await Owner.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the User',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}