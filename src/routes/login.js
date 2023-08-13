const express= require('express');

const router= express.Router();

const loginc=require('../controllers/loginController');

router.get('/',loginc.login);
module.exports= router