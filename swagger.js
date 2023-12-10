const swaggerAutogen = require("swagger-autogen")();

output = "swagger_doc.json";

endpoints = ["./server.js"];

swaggerAutogen(output, endpoints);
