import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Product } from '../entities/Product'
import { CreateProductDTO, UpdateProductDTO } from '../types/Product'

export interface ProductsRepository {
  findById(id: UniqueEntityID): Promise<Product>
  create(data: CreateProductDTO): Promise<void>
  updateById(id: UniqueEntityID, data: UpdateProductDTO): Promise<void>
  findAllByCriticalQuantity(): Promise<Product[]>
}
