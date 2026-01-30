const express = require('express');
const { submitApplication, getMyApplications } = require('../controllers/admission.controller');
const { protect } = require('../middlewares/auth');
const { studentOnly } = require('../middlewares/role');

const router = express.Router();

router.post('/apply', protect, studentOnly, submitApplication);
router.get('/my-applications', protect, studentOnly, getMyApplications);

module.exports = router;
