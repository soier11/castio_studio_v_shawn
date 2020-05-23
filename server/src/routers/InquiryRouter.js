import express from 'express'
import {addNewInquiry} from '../services/InquiryService'

const router = express();

router.post('/inquiry', (req, res) =>
    addNewInquiry(req, res)
        .then(data => res.send(data))
        .catch(e => res.status(e.errStatus).send(e)));

export default router;