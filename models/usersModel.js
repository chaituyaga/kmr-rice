const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema(
  {
    USER_ID: {
      type: String,
      hashKey: true,
      required: true,
    },
    USER_EMAIL: {
      type: String,
      required: true,
    },
    USER_NAME: {
      type: String,
      rangeKey: true,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const User = dynamoose.model("User", schema);

module.exports = User;
