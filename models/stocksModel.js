const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
  INVOICE_NUMBER: {
    type: String,
    hashKey: true,
    required: true,
  },
  SUPPLIER_NAME: {
    type: String,
    rangeKey: true,
    required: true,
  },
  DATA: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          BRAND: {
            type: String,
            required: true,
          },
          BUYING_PRICE: {
            type: String,
            required: true,
          },
          MRP: {
            type: String,
            required: true,
          },
          QUANTITY: {
            type: String,
            required: true,
          },
          TYPE: {
            type: String,
            required: true,
          },
          PACK: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
});

const Stocks = dynamoose.model("STOCKS", schema);

module.exports = Stocks;
