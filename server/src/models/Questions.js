import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questions = new Schema({
    confirmed: {
        type: Boolean,
        enum: [
            true, false
        ]
    },
    content: String,
    phone: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },
});

export default mongoose.model('questions', questions);