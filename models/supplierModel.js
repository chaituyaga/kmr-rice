const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
  SUPPLIER_NAME: {
    type: String,
    hashKey: true,
    required: true,
  },
});

const Suppliers = dynamoose.model("SUPPLIER", schema);

module.exports = Suppliers;
