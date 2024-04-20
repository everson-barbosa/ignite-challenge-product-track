import { Product } from '../entities/Product'
import { ProductsRepository } from '../repositories/products-repository'

interface AssignMinimumProductQuantityInStockServiceRequest {
  productId: Product['id']
  minimumQuantity: number
}

export class AssignMinimumProductQuantityInStockService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({
    productId,
    minimumQuantity,
  }: AssignMinimumProductQuantityInStockServiceRequest) {
    await this.productsRepository.updateById(productId, {
      minimumQuantityInStock: minimumQuantity,
    })
  }
}
