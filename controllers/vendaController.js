const VendaService = require("../services/VendaService");

const VendaController = {
  async criarItem(req, res) {
    try {
      const { valor_venda } = req.body;
      const novaVenda = await VendaService.criarItem({
        valor_venda,
      });
      res.status(201).json(novaVenda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterTodosItens(req, res) {
    try {
      const vendas = await VendaService.obterTodosItens();
      res.status(200).json(vendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterItemPorId(req, res) {
    try {
      const { id_venda } = req.params;
      const venda = await VendaService.obterItemPorId(id_venda);
      res.status(200).json(venda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarItem(req, res) {
    try {
      const { id_venda } = req.params;
      const { valor_venda } = req.body;
      const novosDados = { valor_venda };
      const vendaAtualizada = await VendaService.atualizarItem(
        id_venda,
        novosDados
      );
      res.status(200).json(vendaAtualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async excluirItem(req, res) {
    try {
      const { id_venda } = req.params;
      const mensagem = await VendaService.excluirItem(id_venda);
      res.status(200).json({ message: mensagem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = VendaController;
