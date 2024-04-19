import { Entity } from "../../core/entities/entity";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface ProductProps {
    name: string
    createdAt: Date
    updatedAt?: Date
}

export class Product extends Entity<ProductProps> {
    static create(props: Optional<ProductProps, 'createdAt' | 'updatedAt'>, id?: UniqueEntityID) {
        const product = new Product({
            ...props,
            createdAt: new Date()
        }, id)

        return product
    }
}

