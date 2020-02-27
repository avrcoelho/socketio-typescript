import { Request, Response } from 'express';

import Product from '@models/Product';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await Product.find();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await Product.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
