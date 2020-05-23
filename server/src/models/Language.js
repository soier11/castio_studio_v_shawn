import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Language = new Schema({
    lang_cd: String,
    up_lang_cd: String,
    lang_tp: {
        type: String,
        enum: [
            'kr', 'en'
        ]
    },
    lang: String
});

export default mongoose.model('languages', Language );