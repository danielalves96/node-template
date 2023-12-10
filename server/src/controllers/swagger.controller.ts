import { Request, Response } from 'express';

export const swagger = async (req: Request, res: Response) => {
  return res.sendFile(process.cwd() + '/swagger.json');
};

export const docs = async (req: Request, res: Response) => {
  return res.sendFile(process.cwd() + '/index.html');
};
