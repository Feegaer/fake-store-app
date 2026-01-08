import { IUserRepository } from "@/domain/interfaces/repository/IUserRepository";
import { HttpClient } from "@/infrastructure/db/HttpClient";
import { User } from "@/domain/entities/User";

export class UserRepository implements IUserRepository {
  constructor() { }

  async getById(id: number): Promise<User> {
    const http = new HttpClient();
    const response = await http.get<User>(`https://fakestoreapi.com/users/${id}`);
    return response;
  }

  async getAll(): Promise<User[]> {
    const http = new HttpClient();
    const response = await http.get<User[]>(`https://fakestoreapi.com/users`);
    return response;
  }

  async create(user: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async update(user: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}