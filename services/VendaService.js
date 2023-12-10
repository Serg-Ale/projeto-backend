const VendaModel = require("../models/VendaModel");
const GenericService = require("../helpers/GenericService");

class VendaClass extends GenericService {
  async criarItem(dadosItem) {
    try {
      const itemCriado = await this.Model.create(dadosItem);
      return itemCriado;
    } catch (error) {
      throw new Error(`Erro ao criar o item: ${error.message}`);
    }
  }
}

const VendaService = new VendaClass(VendaModel, "id_venda");

module.exports = VendaService;
