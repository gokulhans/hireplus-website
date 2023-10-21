var express = require('express');
var router = express.Router();
const indexsController = require("../controllers/index-controller");

router.get('/', indexsController.getHomePage)

module.exports = router;