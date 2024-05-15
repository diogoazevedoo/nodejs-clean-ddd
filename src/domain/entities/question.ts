import type { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import type { UniqueEntityId } from "../../core/entities/unique-entity-id"
import type { Optional } from "../../core/types/optional"

interface QuestionProps {
    authorId: UniqueEntityId
    bestAnswerId?: UniqueEntityId
    title: string
    slug: Slug
    content: string
    createdAt: Date
    updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
    static create(
        props: Optional<QuestionProps, 'createdAt'>, 
        id?: UniqueEntityId
    ) {
        const question = new Question({
            ...props,
            createdAt: new Date(),
        }, id)

        return question
    }
}