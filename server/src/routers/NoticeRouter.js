import express from 'express'
import {addNewNotice, fetchNotices} from '../services/NoticeService'

const router = express();

router.post('/notices', async (req, res) =>
    addNewNotice(req, res)
        .then(result => res.send(result))
        .catch(e => res.status(e.errStatus).send(e)));

router.get('/notices', async (req, res) =>
    fetchNotices(req, res)
        .then(result => res.send(result))
        .catch(e => res.status(e.errStatus).send(e)));


export default router;