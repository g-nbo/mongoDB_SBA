const Owner = require('../models/Owner');

module.exports = {
  createOwner,
  getOwners,
  updateOwner,
  deleteOwner,
  displayOwners
};


// CREATE (POST)
async function createOwner(req, res) {
  try {
    const owner = await Owner.create(req.body);

    res.status(200).json(owner);
  } catch (err) {
    res.status(400).json(err);
  }
}

// READ (GET)
async function getOwners(req, res) {
  try {
    const owners = await Owner.find({});

    res.status(200).json(owners);
  } catch (err) {
    res.status(400).json(err);
  }
}

// UPDATE (PATCH)
async function updateOwner(req, res) {
  try {
    const updatedOwner = await Owner.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedOwner);
  } catch (err) {
    res.status(400).send(err);
  }
}

// DELETE (DELETE)
async function deleteOwner(req, res) {
  try {
    await Owner.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the User',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}

// DISPLAY

async function displayOwners(req, res) {
  try {
    const owners = await Owner.find({});

    res.render("owners", { owners })
  } catch (err) {
    res.status(400).json(err);
  }
}