import { IProductRepository } from "@/domain/interfaces/repository/IProductRepository";
import { HttpClient } from "@/infrastructure/db/HttpClient";
import { Product } from "@/domain/entities/Product";

export class ProductRepository implements IProductRepository {
  constructor() { }

  async getById(id: number): Promise<Product> {
    const client = new HttpClient();
    const response = await client.get<Product>(`https://fakestoreapi.com/products/${id}`);
    return response;
  };
  async getAll(): Promise<Product[]> {
    const client = new HttpClient();
    const response = await client.get<Product[]>(`https://fakestoreapi.com/products`);
    return response;
  };
  async create(product: Product): Promise<boolean> {
    throw new Error("Method not implemented.");
  };

  async update(product: Product): Promise<boolean> {
    throw new Error("Method not implemented.");
  };

  async delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  };
}