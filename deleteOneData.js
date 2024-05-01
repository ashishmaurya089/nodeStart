const dbCollection = require("./MongoDB");

const deleteOneData = async () => {
  let data = await dbCollection();
  let result = await data.deleteOne();
  console.log(result);
};
deleteOneData();
