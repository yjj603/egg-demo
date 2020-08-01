const Controller = require('egg').Controller;

class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            code: 200,
            data
        }
    }

    message(msg) {
        this.ctx.body = {
            code: 200,
            data
        }
    }

    error(msg, code = -1) {
        this.ctx.body = {
            code,
            msg
        }
    }
}

module.exports = BaseController;