module.exports = async function (req, res, next) {
  try {
    const { resultadosPaginados } = res;
    if (resultadosPaginados) {
      res.status(200).json(resultadosPaginados);
    } else {
      res
        .status(404)
        .json({ message: "Nenhum resultado de paginação encontrado" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erro ao buscar administradores paginados" });
  }
};
