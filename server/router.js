import express from 'express';
import {inquiryRouter, faqRouter} from './src/routers';

const router = express();

router.use('/', inquiryRouter);
router.use('/', faqRouter);

export default router;