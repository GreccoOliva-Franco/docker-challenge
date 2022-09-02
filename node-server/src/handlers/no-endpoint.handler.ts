// External modules
import { Request, Response } from 'express';

export function noEndpointHandler(req: Request, res: Response) {
  return res.status(404).json({ message: "Endpoint not found" });
}