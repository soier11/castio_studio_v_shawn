import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const inquiry = new Schema({
  confirmed: {
    type: Boolean,
    enum: [
        true, false
    ]
  },
  company_name: String,
  business_type: String,
  phone: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  location: String,
  how_to_know: String,
  agreed: {
    type: Boolean,
    enum: [
      true, false
    ]
  },
  content: String,
  created_date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('inquiries', inquiry);