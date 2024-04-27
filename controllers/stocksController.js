const ddb = require("../db/index");

exports.getStocksData = () => {
  let params = { TableName: "STOCKS" };
  ddb.scan(params, function (err, data) {
    if (err) console.log(err.message, "error while fetching the data");
    else console.log(data, "data fetched from stocks table");
  });
};
