// External modules
import { Request, Response } from 'express';

class StatusController {
  getCurrentStatus(req: Request, res: Response) {
    return res.status(200).send("NodeJs server is online");
  }
}

export default new StatusController();