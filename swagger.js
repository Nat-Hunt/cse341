const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description:
      "This API connects to the Contacts collection and performs basic CRUD operations",
  },
  host: `cse341-lmc7.onrender.com`,
  schemes: ["https"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
