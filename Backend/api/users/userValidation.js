const { inspect } = require("express-validator");

exports.userCreationValidator = [
  inspect("name", "User must have a name").notEmpty(),
  inspect("email", "User must insert a valid email").isEmail(),
  inspect(
    "password",
    "Enter a strong password with at least 8 characters"
  ).isLength({
    min: 8,
  }),
];
