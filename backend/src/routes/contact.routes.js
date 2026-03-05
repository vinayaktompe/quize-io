const contactController = require('../controllers/contact.controller');
const { Router } = require('express');
const router = Router();

router.post("/contact", contactController.contactUsController)

module.exports = router;