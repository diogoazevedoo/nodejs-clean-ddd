import type { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"

interface QuestionProps {
    authorId: string
    title: string
    slug: Slug
    content: string
}

export class Question extends Entity<QuestionProps> {}