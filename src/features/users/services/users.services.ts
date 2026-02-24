import { api } from "../../api";
import { IUser, UserSchema } from "@/src/features/users/schemas/user.schema";

const ENDPOINT = "/users";

export const UserService = {
  getAll: async (): Promise<IUser[]> => {
    const { data } = await api.get(`${ENDPOINT}`);
    return UserSchema.array().parse(data);
  },

  getById: async (id: number): Promise<IUser> => {
    const { data } = await api.get(`${ENDPOINT}/${id}`);
    return data;
  },

  create: async (userData: Partial<IUser>) => {
    const { data } = await api.post(`${ENDPOINT}`, userData);
    return data;
  },

  update: async (userData: IUser) => {
    const { data } = await api.put(`${ENDPOINT}/${userData.id}`, userData);
    return data;
  },
};
