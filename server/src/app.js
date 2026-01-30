const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const admissionRoutes = require('./routes/admission.routes');
const adminRoutes = require('./routes/admin.routes');
const invoiceRoutes = require('./routes/invoice.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admission', admissionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/invoices', invoiceRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'ERP API is running' });
});

module.exports = app;
