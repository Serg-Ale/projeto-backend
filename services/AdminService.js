const AdminModel = require("../models/AdminModel");
const GenericService = require("../helpers/GenericService");

class AdminServiceClass extends GenericService {
  async criarCliente(dadosCliente) {
    try {
      const admin = await AdminModel.findByPk(dadosCliente.id_admin);
      if (!admin) {
        throw new Error("Admin não encontrado");
      }

      const cliente = await admin.createCliente(dadosCliente);
      return cliente;
    } catch (error) {
      throw new Error(`Erro ao criar o cliente: ${error.message}`);
    }
  }
}

const AdminService = new AdminServiceClass(AdminModel, "id_admin");

module.exports = AdminService;
