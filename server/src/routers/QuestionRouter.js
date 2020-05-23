import express from 'express'
import {addNewQuestion, fetchQuestions} from '../services/QuestionService'

const router = express();

router.post('/questions', async (req, res) =>
    addNewQuestion(req, res)
        .then(result => res.send(result))
        .catch(e => res.status(e.errStatus).send(e)));

router.get('/questions', async (req, res) =>
    fetchQuestions(req, res)
        .then(result => res.send(result))
        .catch(e => res.status(e.errStatus).send(e)));


export default router;