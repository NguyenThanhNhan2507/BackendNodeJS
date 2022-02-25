const express = require('express')
const router = express.Router()
const newController = require('../app/controllers/newcontroller')



router.get('/:slug', newController.show)
router.get('/', newController.login)
router.get('/', newController.index)


module.exports = router;