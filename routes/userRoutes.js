import express from "express";

import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { getuserControlller, deleteUserCOntroller } from "../controllers/userController.js";


const router = express.Router();

//fetch all user
router.get("/get-user", requireSignIn, isAdmin, getuserControlller);



//delete category
router.delete(
    "/delete-user/:id",
    requireSignIn,
    isAdmin,
    deleteUserCOntroller
);


export default router;