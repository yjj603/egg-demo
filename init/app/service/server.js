const Service = require('egg').Service;
const str = (str) => str.replace(str[0], str[0].toUpperCase())

class ServerService extends Service {
    create(body, ci) {
        const {ctx} = this
        return ctx.model[str(ci)].create(body)
    }

    async get(query, ci) {
        const {ctx} = this
        const {key, value, page, size} = query
        const find = value ? {[key]: {$regex: value}} : {}
        const def = 10
        const skip = ((Number(page)) - 1) * Number(size || def);
        let res = [], total = 0
        if (ctx.model[str(ci)]) {
            res = await ctx.model[str(ci)].find(find).skip(skip).limit(Number(size) || def).populate('location','name _id')
            total = await ctx.model[str(ci)].count(find)
        } else {
            res = []
        }
        return {res, total}
    }

    getOne(id, ci) {
        const {ctx} = this
        return ctx.model[str(ci)].findById(id).populate('location','name _id')
    }

    getAll(query, ci) {
        const {ctx} = this
        const find = query ? {name: {$regex: query}} : {}
        return ctx.model[str(ci)].find(find)
    }

    update(body, ci) {
        const {ctx} = this
        return ctx.model[str(ci)].findByIdAndUpdate(body._id, body)
    }

    delete(body, ci) {
        const {ctx} = this
        return ctx.model[str(ci)].remove({_id: {$in: body}})
    }
}

module.exports = ServerService