import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { ProductsRepository } from '../repositories/products-repository'

interface TrackProductServiceRequest {
  id: UniqueEntityID
}

export class TrackProductService {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ id }: TrackProductServiceRequest) {
    const product = await this.productsRepository.findById(id)

    return product
  }
}
