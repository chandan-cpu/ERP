const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AdmissionSession',
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    documents: [
      {
        name: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
