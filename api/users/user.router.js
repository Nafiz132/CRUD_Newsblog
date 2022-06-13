const {
  createUser,
  getUserById,
  getUser,
  updateUsers,
  deleteUser,
} = require("./user.controller");
const router = require("express").Router();

router.post("/", createUser);
router.get("/", getUser);
router.get("/:id", getUserById);
router.patch("/", updateUsers);
router.delete("/", deleteUser);

//app.use("/", router);

module.exports = router;
