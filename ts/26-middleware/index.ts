/**
 * Middleware runner - TypeScript
 */
type Request = Record<string, any>;
type Response = Record<string, any>;
type Next = () => Promise<void>;
type Middleware = (req: Request, res: Response, next: Next) => Promise<void> | void;

async function runMiddlewares(req: Request, res: Response, middlewares: Middleware[]): Promise<void> {
  let index = 0;
  
  async function next() {
    if (index >= middlewares.length) return;
    
    const middleware = middlewares[index++];
    await middleware(req, res, next);
  }
  
  await next();
}

export { runMiddlewares, Middleware, Request, Response };

