const pool = require("../../config/database");

class User {
  constructor(firstName, lastName, email, password, gender, number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.number = number;
  }
  static create(data, callback) {
    pool.query("INSERT INTO registration SET ?", data, (err, res, fields) => {
      if (err) {
        console.log("Error: ", err);
        callback(err, null);
      } else {
        console.log("User created Successfully");
        callback(null, res[0]);
      }
    });
  }
  static getUser(callback) {
    pool.query(
      "SELECT id,firstName,lastName,gender,email,number from registration",
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  }
  static getUserByUserEmail(email, callBack) {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (err, results, fields) => {
        if (err) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
  getUserById(id, callback) {
    pool.query(
      "SELECT * FROM registration where id=?",
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
  static updateUser(data, callback) {
    pool.query(
      "UPDATE registration SET firstName=?,lastName=?,gender=?,email=? password=?,number=?,where id=?",
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
  static deleteUser(data, callback) {
    pool.query(
      "DELETE from registration where id=?",
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  }
}

module.exports = User;
