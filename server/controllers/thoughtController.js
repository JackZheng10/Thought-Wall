const Thought = require("../models/Thought");

const addThought = async (req, res) => {
  try {
    const thought = await Thought.create({
      name: req.body.name,
      description: req.body.description,
    });

    return res.json({
      success: true,
      message: "Thought successfully added.",
    });
  } catch (error) {
    console.log("Error with adding thought: ", error);
    return res.json({
      success: false,
      message: "Error with adding thought. See server console for more info.",
    });
  }
};

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find().select(["-__v"]);

    return res.json({
      success: true,
      message: thoughts,
    });
  } catch (error) {
    console.log("Error with fetching thoughts: ", error);
    return res.json({
      success: false,
      message:
        "Error with fetching thoughts. See server console for more info.",
    });
  }
};

module.exports = {
  addThought,
  getThoughts,
};
