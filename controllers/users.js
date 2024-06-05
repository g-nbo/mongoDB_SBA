const User = require('../models/User');

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser
};


// CREATE (POST)
async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

// READ (GET)
async function getUsers(req, res) {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
}

// UPDATE (PATCH)
async function updateUser(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
}

// DELETE (DELETE)
async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Successfully Deleted the User',
    });
  } catch (err) {
    res.status(400).send(err);
  }
}


