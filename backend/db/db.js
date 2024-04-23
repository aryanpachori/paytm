const moongose = require("mongoose");

moongose.connect(
  "mongodb+srv://aryanpachori03:SOBtBhiyY84juLGR@cluster0.i7mnhcy.mongodb.net/"
);

const UserSchema = new moongose.Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    minLength: 6,
  },
  password: {
    type: String,
    minLength: 6,
  },
});

const User = moongose.model("User", UserSchema);

module.exports = {
  User,
};
