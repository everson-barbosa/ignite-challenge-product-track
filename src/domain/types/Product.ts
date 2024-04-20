import { Optional } from '../../core/types/optional'

export interface ProductProps {
  name: string
  quantityInStock: number
  minimumQuantityInStock: number
  createdAt: Date
  updatedAt?: Date
}

export type CreateProductDTO = Optional<ProductProps, 'createdAt'>

export type UpdateProductDTO = Omit<
  Partial<ProductProps>,
  'createdAt' | 'updatedAt'
>
