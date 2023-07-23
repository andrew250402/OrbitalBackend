const { Router } = require('express');
const reviewController = require('../controllers/reviewController');
const requireAuth = require('../middleware/requireAuth')

const router = Router();

router.get('/:_id', reviewController.getOtherReviews);

router.delete('/:review_id', reviewController.deleteReview);

router.put('/:review_id', reviewController.editReview);

router.use(requireAuth);

router.get('/', reviewController.getUserReviews);

router.post('/add-review', reviewController.newReview);

module.exports = router;