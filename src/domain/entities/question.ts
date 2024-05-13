import { randomUUID } from "node:crypto"
import type { Slug } from "./value-objects/slug"

interface QuestionProps {
    authorId: string
    title: string
    slug: Slug
    content: string
}

export class Question {
    public id: string
    public authorId: string
    public title: string
    public slug: Slug
    public content: string   

    constructor(props: QuestionProps, id?: string) {
        this.authorId = props.authorId
        this.title = props.title
        this.slug = props.slug
        this.content = props.content
        this.id = id ?? randomUUID()
    }
}