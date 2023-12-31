const ProdutosVendaService = require("../services/ProdutosVendaService");
const ProdutoModel = require("../models/ProdutoModel");

const ProdutosVendaController = {
  async criarItem(req, res) {
    try {
      const { quantidade, id_produto, id_venda } = req.body;

      const produto = await ProdutoModel.findByPk(id_produto);

      if (produto) {
        await produto.update({
          qtd_estoque: produto.qtd_estoque - quantidade,
        });

        let valor_total_produto = quantidade * produto.preco;

        // Lógica para desconto
        if (quantidade >= 2) {
          valor_total_produto = valor_total_produto - valor_total_produto * 0.2;
        }

        const novosProdutosVenda = await ProdutosVendaService.criarItem({
          quantidade,
          valor_total_produto,
          id_produto,
          id_venda,
        });

        res.status(201).json(novosProdutosVenda);
      } else {
        res.status(404).json({ error: "Produto não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterTodosItens(req, res) {
    try {
      const produtosVenda = await ProdutosVendaService.obterTodosItens();
      res.status(200).json(produtosVenda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterItemPorId(req, res) {
    try {
      const { id_produtos_venda } = req.params;
      const produtosVenda = await ProdutosVendaService.obterItemPorId(
        id_produtos_venda
      );
      res.status(200).json(produtosVenda);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarItem(req, res) {
    try {
      const { id_produtos_venda } = req.params;
      const { quantidade, valor_total_produto, id_produto, id_venda } =
        req.body;
      const novosDados = {
        quantidade,
        valor_total_produto,
        id_produto,
        id_venda,
      };
      const produtosVendaAtualizada = await ProdutosVendaService.atualizarItem(
        id_produtos_venda,
        novosDados
      );
      res.status(200).json(produtosVendaAtualizada);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async excluirItem(req, res) {
    try {
      const { id_produtos_venda } = req.params;
      const mensagem = await ProdutosVendaService.excluirItem(
        id_produtos_venda
      );
      res.status(200).json({ message: mensagem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = ProdutosVendaController;
