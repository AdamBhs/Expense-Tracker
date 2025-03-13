import { Router } from "express";
import { getUserdata } from "../controllers/userController";


const router = Router();

router.get('/userinfo', getUserdata)


export default router;