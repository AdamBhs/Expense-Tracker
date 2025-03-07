import express from "express";
import { createNewAccount, login } from "../controllers/authController";

const router = express.Router();

router.post('/signup', createNewAccount);
router.post('/login', login);

export default router;