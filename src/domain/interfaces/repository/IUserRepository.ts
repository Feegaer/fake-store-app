import { User } from "@/domain/entities/User";

export interface IUserRepository {
  create(user: User): Promise<boolean>;
  update(user: User): Promise<boolean>;
  delete(id: number): Promise<boolean>;
  getById(id: number): Promise<User>;
  getAll(): Promise<User[]>;
}