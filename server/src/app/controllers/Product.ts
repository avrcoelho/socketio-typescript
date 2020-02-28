import { Request, Response } from 'express';

import Product from '@models/Product';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const products = await Product.find();

    return res.json(products);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const product = await Product.create(req.body);

    const ownerSocket = req.connectedUsers[req.query.code];

    // verifica se o usuario esta online
    if (ownerSocket) {
      // para quem vai ser enviado
      req.io.to(ownerSocket).emit('product', product);
    }

    return res.json(product);
  }
}

export default new UserController();
