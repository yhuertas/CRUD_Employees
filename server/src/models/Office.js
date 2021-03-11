const { Schema, model } = require('mongoose');

const officeSchema = new Schema({
    code: { type: String, required: true },
    description: { type: String, required: true },
    horary: { type: String, required: true },
    employee: []//employee list
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Office', officeSchema)
