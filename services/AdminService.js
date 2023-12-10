const AdminModel = require("../models/AdminModel");
const GenericService = require("../helpers/GenericService");
const ClienteModel = require("../models/ClienteModel");
const FuncionarioModel = require("../models/FuncionarioModel");

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
  async criarFuncionario(dadosFuncionario) {
    try {
      const admin = await AdminModel.findByPk(dadosFuncionario.id_admin);
      if (!admin) {
        throw new Error("Admin não encontrado");
      }

      const funcionario = await admin.createFuncionario(dadosFuncionario);
      return funcionario;
    } catch (error) {
      throw new Error(`Erro ao criar o funcionario: ${error.message}`);
    }
  }
  async atualizarCliente(id_item, dadosCliente) {
    try {
      const cliente = await ClienteModel.findByPk(id_item);
      if (!cliente) {
        throw new Error("Cliente não encontrado");
      }

      await cliente.update(dadosCliente);
      return cliente;
    } catch (error) {
      throw new Error(`Erro ao atualizar o cliente: ${error.message}`);
    }
  }
  async atualizarFuncionario(id_funcionario, dadosFuncionario) {
    try {
      const funcionario = await FuncionarioModel.findByPk(id_funcionario);
      if (!funcionario) {
        throw new Error("Funcionario não encontrado");
      }

      await funcionario.update(dadosFuncionario);
      return funcionario;
    } catch (error) {
      throw new Error(`Erro ao atualizar o funcionario: ${error.message}`);
    }
  }
  async excluirFuncionario(id_funcionario) {
    try {
      const quantidadeExcluida = await FuncionarioModel.destroy({
        where: {
          id_funcionario, // Certifique-se de que 'id' é o nome correto da coluna de ID na sua tabela
        },
      });

      if (quantidadeExcluida === 0) {
        throw new Error("Funcionario não encontrado para exclusão");
      }

      return "Funcionario excluído com sucesso";
    } catch (error) {
      throw new Error(`Erro ao excluir o funcionario: ${error.message}`);
    }
  }

  async excluirCliente(id_cliente) {
    try {
      const quantidadeExcluida = await ClienteModel.destroy({
        where: {
          id_cliente, // Certifique-se de que 'id' é o nome correto da coluna de ID na sua tabela
        },
      });

      if (quantidadeExcluida === 0) {
        throw new Error("Cliente não encontrado para exclusão");
      }

      return "Cliente excluído com sucesso";
    } catch (error) {
      throw new Error(`Erro ao excluir o cliente: ${error.message}`);
    }
  }
}

const AdminService = new AdminServiceClass(AdminModel, "id_admin");

module.exports = AdminService;
