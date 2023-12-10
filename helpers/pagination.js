function validarPagina(pagina) {
  const numeroPagina = Number(pagina);
  return !Number.isNaN(numeroPagina) && numeroPagina >= 1 ? numeroPagina : 1;
}

function validarLimite(limite) {
  const valoresPossiveis = [5, 10, 30];
  const numeroLimite = Number(limite);

  if (!valoresPossiveis.includes(numeroLimite)) {
    return 0;
  } else {
    return valoresPossiveis.includes(numeroLimite) ? numeroLimite : 10;
  }
}

module.exports = function paginacao(model) {
  return async (req, res, next) => {
    try {
      const { pagina, limite } = req.query;

      // Validação dos parâmetros de página e limite
      const paginaAtual = validarPagina(pagina);
      const limitePorPagina = validarLimite(limite);

      if (limitePorPagina == 0) {
        return res.status(400).json({
          message: "Número de limite inválido. Deve ser 5, 10 ou 30",
        });
      }

      const { count, rows: results } = await model.findAndCountAll({
        limit: limitePorPagina,
        offset: (paginaAtual - 1) * limitePorPagina,
      });

      const totalPaginas = Math.ceil(count / limitePorPagina);

      const result = {
        count,
        limitePorPagina,
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
