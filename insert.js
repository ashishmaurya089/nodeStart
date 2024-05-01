const dbCollection = require("./MongoDB");

const insert = async () => {
  const db = await dbCollection();

  const result = await db.insertMany([
    {
      name: "werwecsad",
      lastName: "iqbal",
    },
    {
      name: "danish.werw",
      lastName: "iqbal",
    },
    {
      name: "ee.fffffff",
      lastName: "iqbal",
    },
  ]);
  if (result.acknowledged)
    console.log(
      `Inserted ${result.insertedCount} documents into the collection`
    );
};

insert();
