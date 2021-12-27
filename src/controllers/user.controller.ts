import userModel from "../models/user.model";
import userValidate from "../schemas/user.schema";
class UserController {
  constructor() {}
  public getUser(req: any, res: any): void {
    userModel
      .find()
      .select("_id name email")
      .then((allUser) => {
        return res.status(200).json({
          success: true,
          message: "A list of all user",
          userModel: allUser,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again.",
          error: err.message,
        });
      });
  }
  public createUser(req: any, res: any, next: any): void {
    const valid = userValidate(req.body);
    if (!valid) {
      res.status(400).json(userValidate.errors);
    } else {
      userModel.insertMany([req.body]).then(() => {
        res
          .status(200)
          .json({
            success: true,
          })
          .catch((err) => {
            res.status(204).json({
              success: true,
            });
          });
      });
    }
  }
  public deleteUser(req: any, res: any): void {
    userModel
      .findByIdAndRemove(req.params.userId)
      .exec()
      .then(() =>
        res.status(204).json({
          success: true,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
        })
      );
  }
  public updateUser(req: any, res: any): void {
    const updateObject = req.body;
    userModel
      .updateOne({ _id: req.params.userId }, { $set: updateObject })
      .exec()
      .then(() => {
        res.status(200).json({
          success: true,
          message: "user is updated",
          updateCourse: updateObject,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server error",
        });
      });
  }
}

export default UserController;
