const dynamoose = require("dynamoose");

const schema = new dynamoose.Schema({
  INVOICE_NUMBER: {
    type: Number,
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
            type: Number,
            required: true,
          },
          MRP: {
            type: Number,
            required: true,
          },
          QUANTITY: {
            type: Number,
            required: true,
          },
          TYPE: {
            type: String,
            required: true,
          },
          PACK: {
            type: Number,
            required: true,
          },
        },
      },
    ],
  },
});

const Stocks = dynamoose.model("STOCKS", schema);

module.exports = Stocks;
