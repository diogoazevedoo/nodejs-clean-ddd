import type { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import type { UniqueEntityId } from "../../core/entities/unique-entity-id"

interface QuestionProps {
    authorId: UniqueEntityId
    bestAnswerId?: UniqueEntityId
    title: string
    slug: Slug
    content: string
    createdAt: Date
    updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {}