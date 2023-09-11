const express = require('express');
const router = express.Router();
const sessionsCtrl = require('../controllers/sessions');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//all routes start with '/'

//GET /spots/:id/sessions (index)
router.get('/spots/:id/sessions', sessionsCtrl.index);

//GET sessions/:id (show)
router.get('/sessions/:id', sessionsCtrl.show);

//POST /spots/:id/sessions (create)
router.post('/spots/:id/sessions', ensureLoggedIn, sessionsCtrl.create);

//GET /spots/:id/sessions/new (new)
router.get('/spots/:id/sessions/new', sessionsCtrl.new);
//GET /sessions/:id/edit (edit)
router.get('/sessions/:id/edit', sessionsCtrl.edit);

module.exports = router;