const express = require('express');
const { createInvoice, getInvoice } = require('../controllers/invoice.controller');
const { protect } = require('../middlewares/auth');
const { adminOnly } = require('../middlewares/role');

const router = express.Router();

router.post('/generate', protect, adminOnly, createInvoice);
router.get('/:id', protect, getInvoice);

module.exports = router;
