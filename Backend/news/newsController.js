const news = require("../news/newsModel");
const { validation } = require("express-validator");
const { inspector } = require("../authentication/CheckValidation");
const News = require("../news/newsModel");

exports.pulishNews = (req, res, next) => {
  inspector(validation(req));
  const { heading, type, content, img } = req.body;
  const user = req.userData;
  console.log(user.userID);
  const news = new News(heading, type, content, img, user.userID);
  News.publishNews(news, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({
        status: "success",
        data: result,
      });
    }
  });
};

exports.getAllNews = (req, res, next) => {
  News.getAllNews((err, response) => {
    if (err) res.send(err);
    console.log(response);
    res.status(200).json({
      message: "Successfully aquired",
      data: response,
    });
  });
};

exports.getNewsbyUser = (req, res, next) => {
  News.getNewsbyUser(req.params.uuid, (err, response) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(response);
    }
  });
};

exports.deleteNews = (req, res, next) => {
  const uuid = req.params.uuid;
  const user = req.userData;

  News.getNewsbyID(req.params.uuid, (err, res) => {
    if (res) {
      console.log("Response: ", res);
    }
  });
};
exports.updateNews = (req, res, next) => {};
