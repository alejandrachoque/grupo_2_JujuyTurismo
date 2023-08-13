const express= require('express');

const router= express.Router();

const usController= require('../controllers/userController');

router.get('/',usController.renderRegist);
router.post('/',usController.createUser);
//router.get('/',usController.renderL);

module.exports=router