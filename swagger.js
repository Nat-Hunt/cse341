const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description:
      "This API connects to the Contacts collection and performs basic CRUD operations",
  },
  host: `${process.env.PORT || "localhost:3000"}`,
  schemes: ["http"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
