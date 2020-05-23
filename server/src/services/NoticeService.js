import Notices from '../models/Notices';
import {bePresent, hasError} from '../utils/tools';

export const addNewNotice = async (req, res) => {
    let notice = req.body.notice;

    if(!bePresent(notice)) return hasError('900-009', req.query.lang, 500)
    let notices = new Notices();
    notices.notice = notice;
    return notices.save().catch(e => hasError('900-001', req.query.lang, 500));
};

export const fetchNotices = async (req, res) => {
    return Notices.find().select('_id notice createdDate updatedDate');
};

export const test = () => true;