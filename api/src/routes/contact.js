const express = require('express');
const { z } = require('zod');
const { sendContactEmail } = require('../services/mailer');

const router = express.Router();

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Valid email is required'),
  summary: z.string().min(1, 'Project summary is required'),
  budget: z.string().optional(),
});

router.post('/', async (req, res, next) => {
  try {
    const payload = contactSchema.parse(req.body);
    console.info('[contact] Received submission', {
      name: payload.name,
      email: payload.email,
    });
    await sendContactEmail(payload);
    console.info('[contact] Email send succeeded', { email: payload.email });
    res.json({ message: 'Thank you! Your message has been sent.' });
  } catch (error) {
    console.error('[contact] Email send failed', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Invalid form data', details: error.flatten() });
    }
    next(error);
  }
});

module.exports = router;
