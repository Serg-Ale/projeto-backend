const vendaModel = require("../models/vendaModel");

module.exports = {
  getVendas: async function (req, res, next) {
    let vendas = await vendaModel.list();
    if (vendas) res.status(200).json({ vendas });
    else
      res.status(500).json({ message: "Não foi possível localizar as vendas" });
  },

  getVenda: async function (req, res, next) {
    const id_venda = req.params.id_venda;
    let venda = await vendaModel.getById(id_venda);
    if (venda) {
      res.status(200).json({ venda });
    } else {
      res.status(500).json({ message: "Não foi possível localizar a venda " });
    }
  },
  postVenda: async function (req, res, next) {
    const { valor_venda, id_cliente, id_funcionario } = req.body;

    vendaModel
      .save(valor_venda, id_funcionario, id_cliente)
      .then((venda) => {
        res.status(201).json({ venda });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Não foi possível criar a nova venda" });
      });
  },
  putVenda: async function (req, res, next) {
    const { id_venda } = req.params;
    const { valor_venda, id_cliente, id_funcionario } = req.body;

    let aux = {};
    if (valor_venda) aux.valor_venda = valor_venda;
    if (id_cliente) aux.id_cliente = id_cliente;
    if (id_funcionario) aux.id_funcionario = id_funcionario;

    if (aux == {}) {
      return res
        .status(500)
        .json({ message: "Nenhum atributo foi modificado" });
    }
    
    vendaModel
      .update(id_venda, aux.valor_venda, aux.id_cliente, aux.id_funcionario)
      .then(async function (venda) {
        const updated_venda = await vendaModel.getById(id_venda);
        if (venda) res.status(200).json({ updated_venda });
        else res.status(500).json({ message: "Venda não encontrada" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Falha ao alterar a venda" });
      });
  },
  deleteVenda: async function (req, res, next) {
    try {
      const id_venda = req.params.id_venda;
      const venda = await vendaModel.getById(id_venda);
      await vendaModel.delete(id_venda);

      if (!venda) {
        return res.status(404).json({ message: "Venda não encontrada!" });
      }
      return res.status(200).json({ deleted_venda: venda });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Falha ao deletar venda" });
    }
  },
};
