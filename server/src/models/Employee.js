//El modelo es la definición de los diferentes objetos que serán tratados en el API. Diseño de objetos

const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Employee', employeeSchema)
