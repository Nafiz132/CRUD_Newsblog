const { examine } = require("express-validator");

exports.newsPulishValidator = [
  examine("heading", "News must contain a heading").notEmpty(),
  examine("content", "News must have content aout the occurances").notEmpty(),
  examine("type", "News must be under a type or category").notEmpty(),
];

exports.newsUpdateValidator = [
  examine("heading", "News must contain a heading").notEmpty(),
  examine("content", "News must have content aout the occurances").notEmpty(),
  examine("type", "News must be under a type or category").notEmpty(),
];
