const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const AdminRoute = require("./routes/adminRoute");
const ClienteRoute = require("./routes/clienteRoute");
const FuncionarioRoute = require("./routes/funcionarioRoute");
const ProdutoRoute = require("./routes/produtoRoute");
const VendaRoute = require("./routes/vendaRoute");
const ProdVendaRoute = require("./routes/prodVendaRoute");

const installRoute = require("./routes/installRoute");
const loginRoute = require("./routes/loginRoute");

app.use("/admin", AdminRoute);
app.use("/cliente", ClienteRoute);
app.use("/funcionario", FuncionarioRoute);
app.use("/produto", ProdutoRoute);
app.use("/venda", VendaRoute);
app.use("/produtos_venda", ProdVendaRoute);

app.use("/install", installRoute);
app.use("/", loginRoute);

const PORT = process.env.PORT || 3333;

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
