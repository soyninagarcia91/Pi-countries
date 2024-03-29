const { Router } = require("express");
const {getCountries, getPais, getPaisName, postActivities, getActivities} = require('../controllers')

const router = Router();

module.exports = router;
router.get('/countries/name/', getPaisName);
router.get('/countriesPage/:page', getCountries);
router.get('/countries/:idPais', getPais);
router.get('/activities', getActivities);
router.post('/activities', postActivities);

module.exports = router;
