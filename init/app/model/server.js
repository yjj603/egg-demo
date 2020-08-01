module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const ServerSchema = new Schema({
        name: {type: String, required: true},
        organization: {type: String, required: false}
    })
    return mongoose.model('Server',ServerSchema)
}