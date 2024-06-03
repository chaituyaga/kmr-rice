const Stocks = require("../models/stocksModel");

exports.getAllStocks = async () => {
  let res = await Stocks.scan().exec();
  let results = res.toJSON();
  if (results.length) {
    let arr = [];
    results.forEach((i) => {
      i.DATA.forEach((o) => {
        arr.push({
          SUPPLIER_NAME: i.SUPPLIER_NAME,
          INVOICE_NUMBER: i.INVOICE_NUMBER,
          ...o,
        });
      });
    });
    return {
      status: 200,
      body: arr,
    };
  } else {
    return {
      status: 200,
      body: [],
    };
  }
};

exports.addStocks = async (data) => {
  Stocks.create(data, (err, results) => {
    if (err) {
      return {
        status: 400,
        body: err,
      };
    } else {
      return {
        status: 200,
        body: results,
      };
    }
  });
};

exports.updateStocks = async (data) => {
  let promiseArr = [];
  data.forEach((i) => {
    promiseArr.push(Stocks.update(i));
  });
  await Promise.all(promiseArr)
    .then((res) => {
      console.log(res);
      return {
        status: 200,
        body: res,
      };
    })
    .catch((err) => {
      throw err;
    });
};
