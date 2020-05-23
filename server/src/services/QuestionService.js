import Questions from '../models/Questions';
import {bePresent, emailValidation, hasError} from '../utils/tools';

export const addNewQuestion = async (req, res) => {
    let content = req.body.content;
    let phone = req.body.phone;
    let email = req.body.email;

    if(!bePresent(email)) return hasError('900-011', req.query.lang, 500)
    if(!emailValidation(email)) return hasError('900-008', req.query.lang, 500)
    if(!bePresent(content)) return hasError('900-009', req.query.lang, 500)
    if(!bePresent(phone)) return hasError('900-012', req.query.lang, 500)

    let questions = new Questions();
    questions.content = content;
    questions.phone = phone;
    questions.email = email;

    return questions.save().catch(e => hasError('900-001', req.query.lang, 500));
};

export const fetchQuestions = async (req, res) => {
    return Questions.find().select('-_id content phone email createdDate updatedDate');
}