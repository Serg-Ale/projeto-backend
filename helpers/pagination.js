module.exports = function paginacao(model) {
  return async (req, res, next) => {
    const { pagina, quantidade } = req.query;

    let paginaAtual = 1;
    if (pagina && !Number.isNaN(Number(pagina)) && Number(pagina) >= 1) {
      paginaAtual = Number(pagina);
    }

    let quantidadePorPagina = 10;
    if (
      quantidade &&
      !Number.isNaN(Number(quantidade)) &&
      Number(quantidade) >= 1 &&
      Number(quantidade) <= 10
    ) {
      quantidadePorPagina = Number(quantidade);
    }

    try {
      const result = {};
      const { count, rows: results } = await model.Model.findAndCountAll({
        limit: quantidadePorPagina,
        offset: (paginaAtual - 1) * quantidadePorPagina,
      });

      const totalPaginas = Math.ceil(count / quantidadePorPagina);

      result.count = count;
      result.quantidadePorPagina = quantidadePorPagina;
      result.totalPaginas = totalPaginas;
      result.results = results;

      res.resultadosPaginados = result;
      next();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao executar a paginação" });
    }
  };
};
