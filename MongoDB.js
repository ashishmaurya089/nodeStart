const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "eComm";

const client = new MongoClient(url);

async function Mongo() {
  let res = await client.connect();
  let db = res.db(dbName);
  return db.collection("ecomm");
}

module.exports = Mongo;
