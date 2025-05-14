import express from 'express';
import { createUrl, redirectUrl } from '../controllers/urlControllers.js';

const router = express.Router();

router.post('/shorten', createUrl);
router.get('/:slug', redirectUrl);

export default router;
