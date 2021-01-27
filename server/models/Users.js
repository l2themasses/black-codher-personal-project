const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  product: String,
  description: String,
  price: String
});

mongoose.model('users', userSchema);
