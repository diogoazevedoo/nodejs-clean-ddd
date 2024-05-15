import { Entity } from "../../core/entities/entity"
import type { UniqueEntityId } from "../../core/entities/unique-entity-id"
import type { Optional } from "../../core/types/optional"

interface AnswerProps {
    authorId: UniqueEntityId
    questionId: UniqueEntityId
    content: string
    createdAt: Date
    updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
    get content() {
        return this.props.content
    }

    static create(
        props: Optional<AnswerProps, 'createdAt'>, 
        id?: UniqueEntityId
    ) {
        const answer = new Answer({
            ...props,
            createdAt: new Date(),
        }, id)

        return answer
    }
}