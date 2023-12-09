const ClienteService = require("../services/ClienteService");

const ClienteController = {
  async criarItem(req, res) {
    try {
      const { usuario, email, senha, telefone } = req.body;
      const novoAdmin = await ClienteService.criarItem({
        usuario,
        email,
        senha,
        telefone,
      });
      res.status(201).json(novoAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterTodosItens(req, res) {
    try {
      const clientes = await ClienteService.obterTodosItens();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterItemPorId(req, res) {
    try {
      const { id_cliente } = req.params;
      const cliente = await ClienteService.obterItemPorId(id_cliente);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarItem(req, res) {
    try {
      const { id_cliente } = req.params;
      const { usuario, email, senha, telefone } = req.body;
      const novosDados = { usuario, email, senha, telefone };
      const clienteAtualizado = await ClienteService.atualizarItem(
        id_cliente,
        novosDados
      );
      res.status(200).json(clienteAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async excluirItem(req, res) {
    try {
      const { id_cliente } = req.params;
      const mensagem = await ClienteService.excluirItem(id_cliente);
      res.status(200).json({ message: mensagem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ClienteController;
