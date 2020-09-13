const express = require("express");
const router = express.Router();
const icecreamsController = require('./../../controllers/icecreamsController');

router.get('/', checkAuth, icecreamsController.index);
router.post('/', checkAuth, icecreamsController.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
  }

module.exports = router;