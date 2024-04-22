import { ProductsRepository } from '../repositories/products-repository'

export class FetchProductsBelowMinimumQuantityInStock {
  constructor(private productsRepository: ProductsRepository) {}

  async execute() {
    const productsBelowMinimumQuantity =
      await this.productsRepository.findAllBelowMinumumQuantity()

    return productsBelowMinimumQuantity
  }
}
