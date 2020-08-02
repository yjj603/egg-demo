module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const LocationSchema = new Schema({
        name: {type: String, required: true},
        organization: {type: String, required: false, default: ''}
    }, {timestamps: true})
    return mongoose.model('Location', LocationSchema)
}