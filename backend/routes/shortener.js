const express = require('express');
const router = express.Router();
const generateCode = require('../utils/codeGenerator');
const store = require('../store');
const HOST = 'http://localhost:3000';


router.post('/shorten', (req, res, next) => {
  try {
    const { url, shortcode, validity } = req.body;
    if (!url) throw { status: 400, message: 'URL is required' };

    const code = shortcode || generateCode();

    if (store.has(code)) {
      throw { status: 409, message: 'Shortcode already in use' };
    }

    const now = Date.now();
    const minutes = validity || 30;
    const expiresAt = now + minutes * 60 * 1000;

    store.set(code, {
      originalUrl: url,
      shortUrl: `${HOST}/${code}`,
      createdAt: now,
      expiresAt,
      clickCount: 0,
    });

    res.status(201).json({ shortUrl: `${HOST}/${code}` });
  } catch (err) {
    next(err);
  }
});


router.get('/stats', (req, res) => {
  const stats = Array.from(store.values()).map((item) => ({
    originalUrl: item.originalUrl,
    shortUrl: item.shortUrl,
    createdAt: new Date(item.createdAt).toISOString(),
    expiresAt: new Date(item.expiresAt).toISOString(),
    clicks: item.clickCount,
  }));
  res.json(stats);
});

router.get('/:code', (req, res, next) => {
  try {
    const code = req.params.code;
    if (!store.has(code)) throw { status: 404, message: 'Shortcode not found' };

    const data = store.get(code);
    if (Date.now() > data.expiresAt) {
      store.delete(code);
      throw { status: 410, message: 'Shortcode expired' };
    }

    data.clickCount += 1;
    res.redirect(data.originalUrl);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
