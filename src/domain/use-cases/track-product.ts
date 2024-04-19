import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { ProductsRepository } from "../repositories/products-repository";

interface TrackProductUseCaseRequest {
    id: UniqueEntityID
}

export class TrackProductUseCase {

    constructor(private productsRepository: ProductsRepository) {}

    async execute({ id }: TrackProductUseCaseRequest) {
        const product = await this.productsRepository.findById(id)

        return product
    }
}