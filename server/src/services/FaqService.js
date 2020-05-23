import FaqTitle from '../models/FaqTitle';
import {bePresent, hasError} from '../utils/tools';

export const addNewFaq = async (req, res) => {
    let title = req.body.title;
    let subContent = req.body.subContent;
    let content = req.body.content;
    let type = req.body.type;

    if(!bePresent(title)) return hasError('900-009', req.query.lang, 500)
    if(!bePresent(subContent)) return hasError('900-012', req.query.lang, 500)
    if(!bePresent(content)) return hasError('900-010', req.query.lang, 500)
    if(!bePresent(type)) return hasError('900-011', req.query.lang, 500)

    let faqTitle = new FaqTitle();
    faqTitle.title = title;
    faqTitle.userId = 'u000001';
    faqTitle.subContent = subContent;
    faqTitle.content = content;
    faqTitle.type = type;
    return faqTitle.save().catch(e => hasError('900-001', req.query.lang, 500));
};

export const fetchFaq = async (req, res) => {
    return FaqTitle.find().select('_id title type subContent content createdDate updatedDate');
}