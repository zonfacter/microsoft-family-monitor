const express = require('express');
const auth = require('../controllers/auth');
const usage = require('../controllers/usage');
const controls = require('../controllers/controls');

const router = express.Router();

router.get('/auth/login', auth.login);
router.get('/auth/callback', auth.callback);
router.get('/usage/:childId', usage.getUsage);
router.post('/usage/:childId', usage.setLimit);
router.post('/controls/:childId/block', controls.blockApp);
router.post('/controls/:childId/unblock', controls.unblockApp);

module.exports = router;
