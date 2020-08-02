const BaseController = require('./base');

class ServerController extends BaseController {
    async create() {
        const {ctx, service} = this
        const {ci} = ctx.params
        const {body} = ctx.request
        const res = await service.server.create(body, ci)
        this.success()
    }

    async update() {
        const {ctx, service} = this
        const {ci} = ctx.params
        const {body} = ctx.request
        const res = await service.server.update(body, ci)
        this.success()
    }

    async get() {
        const {ctx, service} = this
        const {ci} = ctx.params
        const {query} = ctx
        const res = await service.server.get(query, ci)
        this.success(res)
    }

    async getOne() {
        const {ctx, service} = this
        const {id} = ctx.query
        const {ci} = ctx.params
        const res = await service.server.getOne(id, ci)
        this.success(res)
    }

    async delete() {
        const {ctx, service} = this
        const {ci} = ctx.params
        const {body} = ctx.request
        const res = await service.server.delete(body, ci)
        this.success()
    }
    async getAll(){
        const {ctx, service} = this
        const {ci} = ctx.params
        const {query} = ctx
        const res = await service.server.getAll(query.query,ci)
        this.success(res)
    }

}

module.exports = ServerController;