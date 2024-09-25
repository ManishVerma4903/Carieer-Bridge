 import express from 'express';
 import {register,login,update} from '../controllers/user.controller.js'

 const router = express.Router();

 router.route('/register').post(register);
 router.route('/login').post(login);
 router.route('/profile/update').post(update);

export default router
