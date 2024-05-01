const dbCollection = require("./MongoDB");

const updateData = async () => {
  let data = await dbCollection();
  let result = await data.updateOne(
    {
      name: "c",
    },
    {
      $set: { name: "raavan" },
    }
  );
  console.log(result);
};
updateData();
