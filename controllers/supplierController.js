const Suppliers = require("../models/supplierModel");

exports.getSuppliers = async () => {
  const allSuppliers = await Suppliers.scan().exec();
  if (allSuppliers.toJSON().length) {
    return {
      status: 200,
      body: allSuppliers.toJSON(),
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
