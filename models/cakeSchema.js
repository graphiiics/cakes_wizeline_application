const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true 
  },
  price: {
    type: Number,
    required: true 
  },
  flavors: [String]
});

const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;
