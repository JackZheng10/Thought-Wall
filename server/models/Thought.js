const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: false,
    required: true,
  },
  description: {
    type: String,
    unique: false,
    required: true,
  },
});

const Thought = mongoose.model("Thought", ThoughtSchema);

module.exports = Thought;
