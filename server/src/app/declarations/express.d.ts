declare module Express {
  export interface Request {
    io: any;
    connectedUsers: { [index: string]: any };
  }
}
