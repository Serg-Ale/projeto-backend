const ProdutoModel = require('../models/ProdutoModel');

class ProdutoService {
  static async criarProduto(dadosProduto) {
    try {
      const produtoCriado = await ProdutoModel.create(dadosProduto);
      return produtoCriado;
    } catch (error) {
      throw new Error('Erro ao criar o produto');
    }
  }

  static async obterTodosProdutos() {
    try {
      const produtos = await ProdutoModel.findAll();
      return produtos;
    } catch (error) {
      throw new Error('Erro ao obter todos os produtos');
    }
  }

  static async obterProdutoPorId(id_produto) {
    try {
      const produto = await ProdutoModel.findByPk(id_produto);
      if (!produto) {
        throw new Error('Produto não encontrado');
      }
      return produto;
    } catch (error) {
      throw new Error('Erro ao obter o produto por ID');
    }
  }

  static async atualizarProduto(id_produto, novosDados) {
    try {
      const [rowsUpdated, [produtoAtualizado]] = await ProdutoModel.update(novosDados, {
        where: { id_produto },
        returning: true,
      });
      if (rowsUpdated === 0) {
        throw new Error('Produto não encontrado para atualização');
      }
      return produtoAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar o produto');
    }
  }

  static async excluirProduto(id_produto) {
    try {
      const quantidadeExcluida = await ProdutoModel.destroy({ where: { id_produto: id_produto } });
      if (quantidadeExcluida === 0) {
        throw new Error('Produto não encontrado para exclusão');
      }
      return 'Produto excluído com sucesso';
    } catch (error) {
      throw new Error('Erro ao excluir o produto');
    }
  }
}

module.exports = ProdutoService;
