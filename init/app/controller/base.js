const Controller = require('egg').Controller;

class BaseController extends Controller {
    success(data = '成功') {
        this.ctx.body = {
            code: 200,
            data:data
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