class GenericService {
  constructor(Model, idColumnName) {
    this.Model = Model;
    this.idColumnName = idColumnName;
  }

  async criarItem(dadosItem) {
    try {
      const itemCriado = await this.Model.create(dadosItem);
      return itemCriado;
    } catch (error) {
      throw new Error(`Erro ao criar o item: ${error.message}`);
    }
  }

  async obterTodosItens() {
    try {
      const itens = await this.Model.findAll();
      return itens;
    } catch (error) {
      throw new Error(`Erro ao obter todos os itens: ${error.message}`);
    }
  }

  async obterItemPorId(id_item) {
    try {
      const item = await this.Model.findByPk(id_item);
      if (!item) {
        throw new Error("Item não encontrado");
      }
      return item;
    } catch (error) {
      throw new Error(`Erro ao obter o item por ID: ${error.message}`);
    }
  }

  async atualizarItem(id_item, novosDados) {
    try {
      const whereCondition = {};
      whereCondition[this.idColumnName] = id_item;

      const [rowsUpdated, [itemAtualizado]] = await this.Model.update(
        novosDados,
        {
          where: whereCondition,
          returning: true,
        }
      );

      if (rowsUpdated === 0) {
        throw new Error("Item não encontrado para atualização");
      }

      return itemAtualizado;
    } catch (error) {
      throw new Error(`Erro ao atualizar o item: ${error.message}`);
    }
  }

  async excluirItem(id_item) {
    try {
      const whereCondition = {};
      whereCondition[this.idColumnName] = id_item;

      const quantidadeExcluida = await this.Model.destroy({
        where: whereCondition,
      });

      if (quantidadeExcluida === 0) {
        throw new Error("Item não encontrado para exclusão");
      }

      return "Item excluído com sucesso";
    } catch (error) {
      throw new Error(`Erro ao excluir o item: ${error.message}`);
    }
  }
}

module.exports = GenericService;
