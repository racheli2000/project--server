const user = require('../controllers/user');

const router= require('express').Router();


router.post('/addNewUser', user.addNewUser);

router.get('/getAllUsers', user.getAllUsers);

module.exports= router;
