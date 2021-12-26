import { Router } from "express";
import routeAdapter from "../interfaces/routes.interface";
import UserController from "../controllers/user.controller";

class UserRoute implements routeAdapter {
  public path = "/auth";
  public router = Router();
  public userController = new UserController();
  constructor() {
    this.initializeRoute();
  }
  public initializeRoute() {
      this.router.get('/user:userId',this.userController.getUser);
      this.router.post('/user',this.userController.createUser);
      this.router.patch('/user:userId',this.userController.updateUser);
      this.router.delete('/user:userId',this.userController.deleteUser)
  }
}

export default UserRoute;
