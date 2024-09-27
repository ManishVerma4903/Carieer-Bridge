import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js'

 const router = express.Router();

 router.route("/post").post(isAuthenticated ,postJobs);
 router.route("/get").post(isAuthenticated ,getAllJobs);
 router.route("/getadminjobs").post(isAuthenticated ,getadminjobs);
 router.route("/ get/:id").post(isAuthenticated ,getjobById);
export default router;