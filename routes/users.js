const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', usersCtrl.createUser);

router.get('/', usersCtrl.getUsers);

router.get('/display', usersCtrl.displayUsers)

router.patch('/:id', usersCtrl.updateUser);

router.delete('/:id', usersCtrl.deleteUser);

module.exports = router;
