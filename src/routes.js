// dependencies
const express = require('express');
const multer = require('multer');
// controller imports
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
// configs and routes
const routes = express.Router();
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);


// sessions routes
routes.post('/sessions', SessionController.store);

// spots routes
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

// dashboard routes
routes.get('/dashboard', DashboardController.show);

// booking routes
routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;