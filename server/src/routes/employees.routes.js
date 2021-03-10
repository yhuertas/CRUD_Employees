//Las rutas (URL) son los puntos de contacto con quien necesite usar el API.
const { Router } = require("express"); //Se usa acá para crear las rutas del servidor
const router = Router();
const employeesController = require("../controllers/employees.controler"); //Importando las funciones o métodos que se crearon

//Acá vamos a crear las rutas para el CRUD para los empleados
//prefix route: /api/employees/
router.get("/", employeesController.getEmployees); //GET: Obtener o recuperar todos los documentos
router.post("/", employeesController.createEmployee); //POST: Enviar Datos (para ser guardados)
router.get("/:id", employeesController.getEmployee); //Pasando un ID como parámetro al enviar una petición de consulta para un solo documento
router.put("/:id", employeesController.editEmployee); //PUT: Actualizar Datos de un documento
router.delete("/:id", employeesController.deleteEmployee); //:DELETE: Borrar un documento

module.exports = router; //se exportan las rutas definidas