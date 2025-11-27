/**
 * Middleware runner estilo Express
 */
async function runMiddlewares(req, res, middlewares) {
  let index = 0;
  
  async function next() {
    if (index >= middlewares.length) return;
    
    const middleware = middlewares[index++];
    await middleware(req, res, next);
  }
  
  await next();
}

module.exports = { runMiddlewares };

