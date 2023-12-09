const AdminModel = require("../models/AdminModel");
const AdminService = require("../services/AdminService");

const AdminController = {
  async criarItem(req, res) {
    try {
      const { usuario, email, senha } = req.body;
      const novoAdmin = await AdminService.criarItem({
        usuario,
        email,
        senha,
      });
      res.status(201).json(novoAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async criarCliente(req, res) {
    try {
      const { usuario, email, senha, telefone, id_admin } = req.body; // Dados do corpo da requisição

      const admin = await AdminModel.findByPk(id_admin);
      if (!admin) {
        return res.status(404).json({ error: "Admin não encontrado" });
      }

      const novoCliente = await admin.createCliente({
        usuario,
        email,
        senha,
        telefone,
      });

      return res.status(201).json(novoCliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async obterTodosItens(req, res) {
    try {
      const admins = await AdminService.obterTodosItens();
      res.status(200).json(admins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterItemPorId(req, res) {
    try {
      const { id_admin } = req.params;
      const admin = await AdminService.obterItemPorId(id_admin);
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarItem(req, res) {
    try {
      const { id_admin } = req.params;
      const { usuario, email, senha } = req.body;
      const novosDados = { usuario, email, senha };
      const adminAtualizado = await AdminService.atualizarItem(
        id_admin,
        novosDados
      );
      res.status(200).json(adminAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async excluirItem(req, res) {
    try {
      const { id_admin } = req.params;
      const mensagem = await AdminService.excluirItem(id_admin);
      res.status(200).json({ message: mensagem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = AdminController;
