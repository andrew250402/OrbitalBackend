const { Router } = require('express');
const reviewController = require('../controllers/reviewController');
const requireAuth = require('../middleware/requireAuth')

const router = Router();

router.use(requireAuth)

router.get('/', reviewController.getUserReviews);

router.post('add-review', reviewController.newReview);

module.exports = router;