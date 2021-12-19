const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thoughts",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "Users",
        }
    ],
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

//virtual that retrieves length of the user's friends array
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// UserSchema.virtual('thoughtCount').get(function() {
//     return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
//   });

// create the Pizza model using the PizzaSchema
const User = model("User", UserSchema);

// export the Pizza model
module.exports = User;