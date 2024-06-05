const { Router } = require('express');
const ownersCtrl = require('../controllers/owners.js');

const router = Router();

router.post('/', ownersCtrl.createOwner);

router.get('/', ownersCtrl.getOwners);

router.patch('/:id', ownersCtrl.updateOwner);

router.delete('/:id', ownersCtrl.deleteOwner);

module.exports = router;