export type Post = {
    _id: string
    _createdAt: Date
    title: string
    slug: { current: string }
    image?: string
    content: any[]
    excerpt?: string
    publishedAt?: string
    tags?: string[]
}
