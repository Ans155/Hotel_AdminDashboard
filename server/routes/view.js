const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

/**
 * @route GET /admin/bookings
 * @description View all bookings
 * @access public
 */
router.get('/bookings', viewController.viewBookings);

module.exports = router;