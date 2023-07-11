const { Router } = require('express');
const infoController = require('../controllers/infoController');

const router = Router();

router.get('/:id', infoController.getInfo);
router.post('/search', infoController.getSearchInfo);
//router.get('/portfolio/:id',() =>{}); go to the page
//router.put('/portfolio/:id',() =>{}); update their own info



module.exports = router;