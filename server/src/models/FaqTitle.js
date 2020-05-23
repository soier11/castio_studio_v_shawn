import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const faqTitle = new Schema({
    title: String,
    type: {
        type: String,
        enum: [
            '전체', '회원가입', '촬영세팅', '편집', '자막처리', '업로드', '이용플랜', '기타'
        ]
    },
    userId: String,
    subContent: String,
    content: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('faqTitle', faqTitle);