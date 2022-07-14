const dataBaseConnection = require("../config/database");
const { v4: uuidv4 } = require("uuid");

class News {
  constructor(heading, type, content, img, PubID) {
    this.newsID = uuidv4();
    this.heading = heading;
    this.type = type;
    this.content = content;
    this.img = img;
    this.PubID = PubID;
  }
  static publishNews(newNews, result) {
    dataBaseConnection.query(
      "INSERT INTO newsTable SET ?",
      newNews,
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(err, null);
        } else {
          console.log("News has published Successfully");
          result(null, res);
        }
      }
    );
  }
  static getNewsbyID(id, result) {
    dataBaseConnection.query(
      "SELECT * FROM newsTable WHERE newsID = ?",
      id,
      (err, res) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }
  static getNewsbyUser(id, result) {
    dataBaseConnection.query(
      "SELECT * FROM newstable WHERE creatorID = ?",
      [id],
      (err, res) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  }
  static getAllNews(result) {
    dataBaseConnection.query("Select * from newsTable", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("News : ", res);
        result(null, res);
      }
    });
  }
  static delete(id, result) {
    dataBaseConnection.query(
      "DELETE FROM newsTable WHERE id = ?",
      [id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  }
}

module.exports = News;
