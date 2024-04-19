import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Product } from "../entities/Product";

export interface ProductsRepository {
    findById(id: UniqueEntityID): Promise<Product>
}