import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const notices = new Schema({
    notice: String,
    userId: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('notices', notices);