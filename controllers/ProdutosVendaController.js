// const ProdVendasModel = require("../models/ProdutosVendaModel");
// const ProdutoController = require("../controllers/ProdutoController");


// const ProdutoModel = require("../models/ProdutoModel");

// module.exports = {
//   getProdVenda: async function (req, res, next) {
//     const id_produtos_venda = req.params.id_produtos_venda;
//     let prodVenda = await ProdVendasModel.getById(id_produtos_venda);
//     if (prodVenda) {
//       res.status(200).json({ produtos_venda: prodVenda });
//     } else {
//       res
//         .status(500)
//         .json({ message: "Não foi possível localizar os produtos da venda " });
//     }
//   },
//   postProdVenda: async function (req, res, next) {
//     const { quantidade, id_venda, id_produto } = req.body;
//     const produto = await ProdutoModel.getById(id_produto);

//     // TODO criar descontos para certas quantidades e itens

//     let valor_total_produto = 0;

//     if (produto && produto.preco !== undefined) {
//       valor_total_produto = quantidade * produto.preco;
//       produto.qtd_estoque -= quantidade;
//       ProdutoController.updateEstoque(id_produto, produto.qtd_estoque);
//     } else {
//       console.log("Produto ou preço não definidos");
//     }

//     //TO DO VALIDAR CAMPOSSS

//     ProdVendasModel
//       .save(quantidade, valor_total_produto, id_venda, id_produto)
//       .then((prodVenda) => {
//         res.status(201).json({ produtos_venda: prodVenda });
//       })
//       .catch((err) => {
//         res
//           .status(500)
//           .json({ message: "Não foi possível associar os produtos a venda" });
//       });
//   },
//   putProdVenda: async function (req, res, next) {
//     const { id_produtos_venda } = req.params;
//     const { quantidade, valor_total_produto, id_venda, id_produto } = req.body;

//     let aux = {};
//     if (quantidade) aux.quantidade = quantidade;
//     if (valor_total_produto) aux.valor_total_produto = valor_total_produto;
//     if (id_venda) aux.id_venda = id_venda;
//     if (id_produto) aux.id_produto = id_produto;

//     if (aux == {}) {
//       return res
//         .status(500)
//         .json({ message: "Nenhum atributo foi modificado" });
//     }

//     ProdVendasModel
//       .update(
//         id_produtos_venda,
//         aux.quantidade,
//         aux.valor_total_produto,
//         aux.id_venda,
//         aux.id_produto
//       )
//       .then(async function (prodVenda) {
//         const updated_produtos_venda = await ProdVendasModel.getById(
//           id_produtos_venda
//         );
//         if (prodVenda) res.status(200).json({ updated_produtos_venda });
//         else
//           res
//             .status(500)
//             .json({ message: "Produtos ou venda não encontrados" });
//       })
//       .catch((err) => {
//         console.log(err);
//         res
//           .status(500)
//           .json({ message: "Falha ao alterar os produtos da venda" });
//       });
//   },
//   deleteProdVenda: async function (req, res, next) {
//     try {
//       const id_produtos_venda = req.params.id_produtos_venda;
//       const prodVenda = await ProdVendasModel.getById(id_produtos_venda);
//       await ProdVendasModel.delete(id_produtos_venda);

//       if (!prodVenda) {
//         return res
//           .status(404)
//           .json({ message: "Produtos ou venda não encontrados!" });
//       }
//       return res.status(200).json({ deleted_produtos_venda: prodVenda });
//     } catch (error) {
//       console.error(error);
//       return res
//         .status(500)
//         .json({ message: "Falha ao deletar produtos da venda" });
//     }
//   },
// };
