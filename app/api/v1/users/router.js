var express = require('express');
const { getAllUsers } = require('./controller');
var router = express.Router();

router.get('/', getAllUsers);

module.exports = router;