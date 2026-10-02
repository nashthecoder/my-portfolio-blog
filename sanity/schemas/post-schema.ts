const post = {
    name: 'post',
    title: 'Posts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 }
        },
        {
            name: 'contentType',
            title: 'Content Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Article', value: 'article' },
                    { title: 'Talk', value: 'talk' },
                    { title: 'Walkthrough', value: 'walkthrough' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' }
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: 'videoUrl',
            title: 'YouTube Video URL',
            type: 'url',
            description: 'Full YouTube URL (e.g. https://youtube.com/watch?v=...)'
        },
        {
            name: 'eventName',
            title: 'Event Name',
            type: 'string',
            description: 'For talks — the conference or event name'
        },
        {
            name: 'linkedinUrl',
            title: 'LinkedIn Newsletter URL',
            type: 'url',
            description: 'Link to the LinkedIn newsletter version (if applicable)'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        }
    ]
}
export default post;