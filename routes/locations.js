const { Router } = require('express');
const locationsCtrl = require('../controllers/locations.js');

const router = Router();

router.post('/', locationsCtrl.createLocation);

router.get('/', locationsCtrl.getLocations);

router.patch('/:id', locationsCtrl.updateLocation);

router.delete('/:id', locationsCtrl.deleteLocation);

module.exports = router;