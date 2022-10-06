const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const port = process.env.PORT || 3000;
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger_output.json");

app
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-control-Allow-Origin", "*");
    next();
  })
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Example app listening on port ${port}`);
  }
});
