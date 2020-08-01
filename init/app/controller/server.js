const BaseController = require('./base');

class ServerController extends BaseController {
    async create() {
        const {ctx} = this
        console.log(ctx.model)
        console.log(ctx.model.Server)
        this.success({
            name: 'kkb'
        })
    }
}

module.exports = ServerController;