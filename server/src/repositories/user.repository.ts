import { prisma } from '@/services/prisma';

type UserProps = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string | null;
  createdAt?: Date;
  updatedAt?: Date;
};

const userReturn = {
  id: true,
  name: true,
  email: true,
  password: false,
  phone: true,
  createdAt: true,
  updatedAt: true,
};

export const createUser = async (data: UserProps) => {
  const user = await prisma.user.create({
    data,
    select: userReturn,
  });

  return user;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({
    select: userReturn,
  });
  return users;
};

export const getById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: userReturn,
  });
  return user;
};

export const updateUser = async (id: string, data: UserProps) => {
  const user = prisma.user.update({
    where: { id },
    data,
    select: userReturn,
  });
  return user;
};

export const deleteUser = async (id: string) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return;
};
