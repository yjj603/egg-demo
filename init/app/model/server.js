module.exports = app => {
    let mongoose = app.mongoose
    let Schema = mongoose.Schema
    const ServerSchema = new Schema({
        name: {type: String, required: true},
        organization: {
            type: String, required: false,
            // default: ''
        },
        location: {
            type: Schema.Types.ObjectId,
            ref: 'Location',
            // default: {}
        }
    }, {timestamps: true})
    return mongoose.model('Server', ServerSchema)
}