const ProdutoService = require("../services/ProdutoService");

const ProdutoController = {
  async criarItem(req, res) {
    try {
      const { nome, descricao, qtd_estoque, preco } = req.body;
      const novoProduto = await ProdutoService.criarItem({
        nome,
        descricao,
        qtd_estoque,
        preco,
      });
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterTodosItens(req, res) {
    try {
      const produtos = await ProdutoService.obterTodosItens();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterItemPorId(req, res) {
    try {
      const { id_produto } = req.params;
      const produto = await ProdutoService.obterItemPorId(id_produto);
      res.status(200).json(produto);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarItem(req, res) {
    try {
      const { id_produto } = req.params;
      const { nome, descricao, qtd_estoque, preco } = req.body;
      const novosDados = { nome, descricao, qtd_estoque, preco };
      const produtoAtualizado = await ProdutoService.atualizarItem(
        id_produto,
        novosDados
      );
      res.status(200).json(produtoAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async excluirItem(req, res) {
    try {
      const { id_produto } = req.params;
      const mensagem = await ProdutoService.excluirItem(id_produto);
      res.status(200).json({ message: mensagem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ProdutoController;
