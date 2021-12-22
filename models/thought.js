//import dependencies from mongoose
const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const ReactionSchema = require("./Reaction.js");


//create Thought Schema
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  //user that created this thought????
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;