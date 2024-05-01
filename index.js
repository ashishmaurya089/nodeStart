const dbCollection = require("./MongoDB");

async function main() {
  let data = await dbCollection();
  data = await data.find().toArray();

  console.log(data);
  
}
main();

// const express = require("express");
// const app = express();
// const route = express.Router();

// const middelWare = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please enter ageg firts");
//   } else if (req.query.age < 18) {
//     resp.send("You are too young");
//   } else {
//     next();
//   }
// };

// route.use(middelWare);

// app.get("", (req, resp) => {
//   resp.send("Home ");
// });

// app.get("/second", (req, resp) => {
//   resp.send("Hello Asihsh Second");
// });
// route.get("/third", (req, resp) => {
//   resp.send("Hello Asihsh Third");
// });

// app.use("/", route);

// app.listen(5000);
