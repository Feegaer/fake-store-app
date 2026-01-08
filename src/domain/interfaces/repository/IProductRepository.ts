import { Product } from "@/domain/entities/Product";

export interface IProductRepository {
  create(product: Product): Promise<boolean>;
  update(product: Product): Promise<boolean>;
  delete(id: number): Promise<boolean>;
  getById(id: number): Promise<Product>;
  getAll(): Promise<Product[]>;
}