const Customers = require("../models/customerModel");

exports.getCustomers = async () => {
  const allCustomers = await Customers.scan().exec();
  if (allCustomers.toJSON().length) {
    let arr = allCustomers.toJSON().map((i) => i.CUSTOMER_NAME);
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

exports.addCustomer = async (body) => {
  await Customers.create({ CUSTOMER_NAME: body });
  return {
    status: 200,
    body: "Supplier Created Succesfully",
  };
};
