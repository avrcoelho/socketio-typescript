import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import io from 'socket.io';
import http from 'http';

import routes from './routes';

class App {
  public server: http.Server;
  public app: express.Application;
  private io: io.Server;
  private connectedUsers: { [index: string]: any } = {};

  public constructor() {
    this.app = express();
    this.server = new http.Server(this.app);

    this.socket();
    this.middlewares();
    this.database();
    this.routes();
  }

  private socket(): void {
    this.io = io(this.server);

    // escuta os eventos que estão rolando dentro do io
    this.io.on('connection', socket => {
      const { code } = socket.handshake.query;

      this.connectedUsers[code] = socket.id;

      console.log(code);

      socket.on('disconnect', () => {
        delete this.connectedUsers[code];
      });
    });
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use((req: Request | any, res: Response, next: NextFunction) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers;

      next();
    });
  }

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/database', {
      useNewUrlParser: true,
    });
  }

  private routes(): void {
    this.app.use(routes);
  }
}

export default new App().server;
