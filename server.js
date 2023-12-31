const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const AdminRoute = require("./routes/AdminRoute");
const ClienteRoute = require("./routes/ClienteRoute");
const FuncionarioRoute = require("./routes/FuncionarioRoute");
const ProdutoRoute = require("./routes/ProdutoRoute");
const VendaRoute = require("./routes/VendaRoute");
const ProdutosVendaRoute = require("./routes/ProdutosVendaRoute");

const InstallRoute = require("./routes/InstallRoute");
const LoginRoute = require("./routes/LoginRoute");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_doc.json");

app.use("/admin", AdminRoute);
app.use("/cliente", ClienteRoute);
app.use("/funcionario", FuncionarioRoute);
app.use("/produto", ProdutoRoute);
app.use("/venda", VendaRoute);
app.use("/produtos_venda", ProdutosVendaRoute);

app.use("/install", InstallRoute);
app.use("/", LoginRoute);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3333;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
