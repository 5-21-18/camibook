const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  category: {
    type: String,
    require: true
  },
  bname: {
    type: String,
    require: true
  },
  isbn: {
    type: String,
    require: true
  },
  year: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  thoughts: {
    type: String,
    require: true
  },
  cover: {
    type: String,
    require: true
  },

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],

  unlikes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  //   text: {
  //     type: String
  //   },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      bname: {
        type: String,
        require: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model("post", PostSchema);
