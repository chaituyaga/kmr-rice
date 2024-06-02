const Suppliers = require("../models/supplierModel");

exports.getSuppliers = async () => {
  const allSuppliers = await Suppliers.scan().exec();
  if (allSuppliers.toJSON().length) {
    let arr = allSuppliers.toJSON().map((i) => i.SUPPLIER_NAME);
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

exports.addSupplier = async (body) => {
  await Suppliers.create({ SUPPLIER_NAME: body });
  return {
    status: 200,
    body: "Supplier Created Succesfully",
  };
};
