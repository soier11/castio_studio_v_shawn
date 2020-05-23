import express from 'express'
import {addNewFaq, fetchFaq} from '../services/FaqService'

const router = express();

router.post('/faq', async (req, res) =>
    addNewFaq(req, res)
        .then(result => res.send(result))
        .catch(e => res.status(e.errStatus).send(e)));

router.get('/faq', async (req, res) =>
    fetchFaq(req, res)
        .then(result => res.send(result))
        .catch(e => res.status(e.errStatus).send(e)));


export default router;