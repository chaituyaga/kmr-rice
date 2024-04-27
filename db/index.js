const dynamoose = require("dynamoose");

const ddb = new dynamoose.aws.ddb.DynamoDB({
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
  region: "ap-southeast-2",
});

dynamoose.aws.ddb.set(ddb);
