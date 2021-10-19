const { Schema, model } = require('mongoose')

const schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    link: [{ type: Schema.Types.ObjectId, ref: 'link' }]
})

module.exports = model('user', schema)