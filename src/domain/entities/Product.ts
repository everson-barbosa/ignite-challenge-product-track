import { Entity } from '../../core/entities/entity'
import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { CreateProductDTO, ProductProps } from '../types/Product'

export class Product extends Entity<ProductProps> {
  static create(props: CreateProductDTO, id?: UniqueEntityID) {
    const product = new Product(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return product
  }
}
