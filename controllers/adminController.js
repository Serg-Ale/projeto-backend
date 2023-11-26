const adminModel = require("../models/adminModel");

module.exports = {
    getAdmins: async function (req, res, next) {
        let admins = await adminModel.list()
        res.json(admins)
    },
    getAdmin: async function (req, res, next) {
        let admin = await adminModel.getById(req.params.id)
        if (admin)
            res.status(200).json({ admin })

        else
            res.status(500).json({ message: "Não foi possível localizar o admin" })
    },
    postAdmin: async function (req, res, next) {
        const { nome, sobrenome } = req.body
        //TO DO VALIDAR CAMPOSSS
        adminModel.save(nome, sobrenome).then(admin => {
            res.status(201).json({ admin })
        }).catch(err => {
            res.status(500).json({ message: "Não foi possível criar o novo admin" })

        })
    },
    putAdmin: async function (req, res, next) {
        const { id } = req.params
        const { nome, sobrenome } = req.body
        //TO DO VALIDAR CAMPOSSS
        let aux = {}
        if (nome) aux.nome = nome
        if (sobrenome) aux.sobrenome = sobrenome

        if (aux == {}) {
            return res.status(500).json({ message: "Nenhum atributo foi modificado" })
        }
        //Arrumar resposta
        adminModel.update(id, aux.nome, aux.sobrenome).then(admin => {
            if (admin)
                res.status(200).json({ admin })
            else
                res.status(500).json({ message: "Admin não encontrado" })
        }).catch(err => {
            console.log(err)
            res.status(500).json({ message: "Falha ao alterar o admin" })
        })
    },
    deleteAdmin: async function (req, res, next) {
        //Arrumar resposta
        adminModel.delete(req.params.id).then(admin => {
            if (admin)
                res.status(200).json({ admin })
            else
                res.status(500).json(fail("Admin não encontrado"))
        }).catch(err => {
            console.log(err)
            res.status(500).json({ message: "Falha ao excluir o admin" })
        })
    }

}