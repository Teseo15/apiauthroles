import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);
router.get("/",usersCtrl.getUsers);
router.get("/:id",usersCtrl.getUser);
router.put("/:id",[authJwt.verifyToken],usersCtrl.updateUserById);
router.delete('/:id',[authJwt.verifyToken],usersCtrl.deleteUserById);
export default router;
