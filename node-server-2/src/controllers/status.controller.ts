// External modules
import { Request, Response } from 'express';

class StatusController {
  getCurrentStatus(req: Request, res: Response) {
    return res.status(200).send("Hello from server 2. NodeJs server 2 is online");
  }
}

export default new StatusController();