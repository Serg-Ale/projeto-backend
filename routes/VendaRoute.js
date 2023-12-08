const VendaController = require('../controllers/VendaController'); // Substitua pelo seu controlador real
const GenericRouter = require('./GenericRouter');

const VendaRouter = new GenericRouter(VendaController);

module.exports = VendaRouter.getRouter();
