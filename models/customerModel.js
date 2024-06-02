const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
  CUSTOMER_NAME: {
    type: String,
    hashKey: true,
    required: true,
  },
});

const Customers = dynamoose.model("CUSTOMER", schema);

module.exports = Customers;
