//El controlador es la parte que permite administrar (CRUD) los modelos
//Acá se definen los métodos del API que serán usados en las rutas.
const employeesController = {} //un objeto que contendrá un listado de métodos
const Employee = require('../models/Employee'); //Importamos el modelo de datos para los empleados

/*
Existen tres formas de esperar respuestas a peticiones de forma asíncrona para no depender de la respuesta, así continúa la ejecución del programa:
    - CallBack a través de funcion(res,error){} : Requiere codigo anidado genera Pyramid of Doom, o Callback hell.
    - Promesas a través de .then() y .catch() : Retorna como resultado "provisional" una Promise, que es un objeto que contendrá en el futuro el resultado, eventualmente tambièn tendrà comportaiento similar a Callback
    - Async / Await : simula ser una estructura sincrona pero con las bondades de la asincronicidad.
*/

//Get all employees
employeesController.getEmployees = async(req, res) => {
        const employees = await Employee.find() //Trae todos los objetos de la coleccion Employee
        res.json(employees)
        console.log("All employees retrieved")
    }
    //Add a new employee
employeesController.createEmployee = async(req, res) => {
        const newEmployee = new Employee(req.body) //Crea un objeto del tipo Employee basado en el json que se recibe
        console.log(newEmployee)
        await newEmployee.save() //Almacena el empleado nuevo en la base de datos
        res.send({ message: "New employee created" })
    }
    //Get just one employee
employeesController.getEmployee = async(req, res) => {
        console.log(req.params)
        const result = await Employee.findOne({ _id: req.params.id }) //Employee.findById(req.params.id)//another way
        res.send(result) //devuelve el empleado encontrado
    }
    //Update (edit) an Employee
employeesController.editEmployee = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body); //Actualizar el id
    res.json({ status: "Employee updated" })
}

//Delete employee by Id
employeesController.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ status: "Employee Deleted" })
}

module.exports = employeesController; //Se exporta el objeto que contine todos los métodos