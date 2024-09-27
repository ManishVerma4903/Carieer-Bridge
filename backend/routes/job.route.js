import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js'
import {postjob, getAlljobs, getadminjobs, getjobbyId} from '../controllers/job.controller.js'

 const router = express.Router();

 router.route("/post").post(isAuthenticated ,postjob);
 router.route("/get").post(isAuthenticated ,getAlljobs);
 router.route("/getadminjobs").post(isAuthenticated ,getadminjobs);
 router.route("/ get/:id").post(isAuthenticated ,getjobbyId);
export default router;