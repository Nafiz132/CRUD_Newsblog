const {
  createUser,
  getUserById,
  getUser,
  updateUsers,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../authentication/tokenValidation");
router.post("/", checkToken, createUser);
router.get("/", checkToken, getUser);
router.get("/:id", checkToken, getUserById);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);

//app.use("/", router);

module.exports = router;
