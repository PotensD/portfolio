import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedOn: {
			type: 'date',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		thumbnail: {
			type: 'string',
			required: true,
		},
		tags: {
			type: 'list',
			of: { type: 'string' },
			required: true,
		},
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => doc._raw.flattenedPath,
		},
	},
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug, rehypePrettyCode, rehypeAutolinkHeadings],
	},
})
