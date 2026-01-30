const express = require('express');
const {
  createSession,
  getAllApplications,
  updateApplicationStatus,
} = require('../controllers/admin.controller');
const { protect } = require('../middlewares/auth');
const { adminOnly } = require('../middlewares/role');

const router = express.Router();

router.post('/sessions', protect, adminOnly, createSession);
router.get('/applications', protect, adminOnly, getAllApplications);
router.put('/applications/:id', protect, adminOnly, updateApplicationStatus);

module.exports = router;
