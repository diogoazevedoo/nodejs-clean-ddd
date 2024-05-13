import { randomUUID } from "node:crypto"

interface QuestionProps {
    authorId: string
    title: string
    content: string
}

export class Question {
    public id: string
    public authorId: string
    public title: string
    public content: string   

    constructor(props: QuestionProps, id?: string) {
        this.authorId = props.authorId
        this.title = props.title
        this.content = props.content
        this.id = id ?? randomUUID()
    }
}