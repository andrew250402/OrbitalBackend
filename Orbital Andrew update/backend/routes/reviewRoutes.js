const { Router } = require('express');
const reviewController = require('../controllers/reviewController');
const requireAuth = require('../middleware/requireAuth')

const router = Router();

router.use(requireAuth)

router.get('/', reviewController.getUserReviews); //to change

module.exports = router;