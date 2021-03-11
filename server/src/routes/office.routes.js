const { Router } = require("express"); 
const router = Router();
const officeController = require("../controllers/office.controller"); 

//prefix route: /api/offices/
router.get("/", officeController.getOffices); //GET: Obtener o recuperar todos los documentos
router.post("/", officeController.createOffice); //POST: Enviar Datos (para ser guardados)
router.get("/:id", officeController.getOffice); //Pasando un ID como parámetro al enviar una petición de consulta para un solo documento
router.put("/:id", officeController.editOffice); //PUT: Actualizar Datos de un documento
router.delete("/:id", officeController.deleteOffice); //:DELETE: Borrar un documento

module.exports = router;