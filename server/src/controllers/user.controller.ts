import {
  createUser,
  deleteUser,
  getAll,
  getById,
  updateUser,
} from '@/repositories/user.repository';
import { Request, Response } from 'express';

import bcrypt from 'bcryptjs';

import { userValidation } from '@/validators/user.validation';

export const create = async (req: Request, res: Response) => {
  try {
    await userValidation.validate(req.body);

    const hashPassword = await bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashPassword;

    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const user = await getById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
