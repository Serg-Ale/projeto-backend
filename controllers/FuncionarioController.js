const FuncionariService = require("../services/FuncionarioService");

const FuncionarioController = {
  async criarItem(req, res) {
    try {
      const { usuario, email, senha, cargo, salario, id_admin } = req.body;
      const novoFuncionario = await FuncionariService.criarItem({
        usuario,
        email,
        senha,
        cargo,
        salario,
        id_admin,
      });
      res.status(201).json(novoFuncionario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterTodosItens(req, res) {
    try {
      const funcionarios = await FuncionariService.obterTodosItens();
      res.status(200).json(funcionarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async obterItemPorId(req, res) {
    try {
      const { id_funcionario } = req.params;
      const funcionario = await FuncionariService.obterItemPorId(
        id_funcionario
      );
      res.status(200).json(funcionario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async atualizarItem(req, res) {
    try {
      const { id_funcionario } = req.params;
      const { usuario, email, senha, cargo, salario, id_admin } = req.body;
      const novosDados = { usuario, email, senha, cargo, salario, id_admin };
      const funcionarioAtualizado = await FuncionariService.atualizarItem(
        id_funcionario,
        novosDados
      );
      res.status(200).json(funcionarioAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async excluirItem(req, res) {
    try {
      const { id_funcionario } = req.params;
      const mensagem = await FuncionariService.excluirItem(id_funcionario);
      res.status(200).json({ message: mensagem });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = FuncionarioController;
