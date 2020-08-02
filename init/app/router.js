
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/:ci/create',controller.server.create)
  router.get('/api/:ci/get',controller.server.get)
  router.post('/api/:ci/update',controller.server.update)
  router.get('/api/:ci/getOne',controller.server.getOne)
  router.get('/api/:ci/getAll',controller.server.getAll)
  router.post('/api/:ci/delete',controller.server.delete)
};
