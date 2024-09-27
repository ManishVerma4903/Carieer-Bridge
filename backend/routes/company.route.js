import express from 'express';
 import {register,login,updateProfile, logout} from '../controllers/user.controller.js'
 import isAuthenticated from '../middlewares/isAuthenticated.js'

 const router = express.Router();

 router.route('/register').post(registerCompany);
 router.route('/get').get(isAuthenticated ,getcomapny);
 router.route('/get/:id').get(isAuthenticated,getcompanyById);
 router.route("/update/:id").put(isAuthenticated,updatecompany);

export default router;