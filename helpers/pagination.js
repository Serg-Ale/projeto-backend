function validarPagina(pagina) {
  const numeroPagina = Number(pagina);
  return !Number.isNaN(numeroPagina) && numeroPagina >= 1 ? numeroPagina : 1;
}

function validarQuantidade(quantidade) {
  const numeroQuantidade = Number(quantidade);
  return !Number.isNaN(numeroQuantidade) &&
    numeroQuantidade >= 1 &&
    numeroQuantidade <= 10
    ? numeroQuantidade
    : 10;
}

module.exports = function paginacao(model) {
  return async (req, res, next) => {
    try {
      const { pagina, quantidade } = req.query;

      // Validação dos parâmetros de página e quantidade
      const paginaAtual = validarPagina(pagina);
      const quantidadePorPagina = validarQuantidade(quantidade);

      const { count, rows: results } = await model.Model.findAndCountAll({
        limit: quantidadePorPagina,
        offset: (paginaAtual - 1) * quantidadePorPagina,
      });

      const totalPaginas = Math.ceil(count / quantidadePorPagina);

      const result = {
        count,
        quantidadePorPagina,
        totalPaginas,
        results,
      };

      res.resultadosPaginados = result;
      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao executar a paginação" });
    }
  };
};
