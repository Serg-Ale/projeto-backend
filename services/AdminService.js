const AdminModel = require("../models/AdminModel");
const GenericService = require("../helpers/GenericService");

const AdminService = new GenericService(AdminModel, "id_admin");

module.exports = AdminService;
