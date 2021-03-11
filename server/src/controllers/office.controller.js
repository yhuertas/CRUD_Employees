const officeController = {}
const Office = require('../models/Office'); 

    //Get all offices
    officeController.getOffices = async(req, res) => {
        const offices = await Office.find()
        res.json(offices)
        console.log("All Offices retrieved")
    }

    //Add a new Office
    officeController.createOffice = async(req, res) => {
        const newOffice = new Office(req.body) 
        console.log(newOffice)
        await newOffice.save() 
        res.send({ message: "New Office created" })
    }

    //Get just one Office
    officeController.getOffice = async(req, res) => {
        console.log(req.params)
        const result = await Office.findOne({ _id: req.params.id }) 
        res.send(result) 
    }

    //Update (edit) an Office
    officeController.editOffice = async(req, res) => {
    await Office.findByIdAndUpdate(req.params.id, req.body); 
    res.json({ status: "Office updated" })
    }

    //Delete Office by Id
    officeController.deleteOffice = async(req, res) => {
        await Office.findByIdAndDelete(req.params.id)
        res.json({ status: "Office Deleted" })
    }

module.exports = officeController;