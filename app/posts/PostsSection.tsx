'use client'

import { useState } from 'react'
import { allPosts } from '~/.contentlayer/generated'
import PostCard from '~/components/PostCard'

export default function PostsSection({ className }: { className?: string }) {
  const [currentTag, setCurrentTag] = useState('All')
  return (
    <section className={className}>
      <Tags currentTag={currentTag} setCurrentTag={setCurrentTag} />
      <Posts tag={currentTag} />
    </section>
  )
}

const tags = ['All', ...allPosts.flatMap((post) => post.tags)].filter(
  (tag, i, arr) => arr.indexOf(tag) === i
)

function Tags({
  currentTag,
  setCurrentTag,
}: {
  currentTag: string
  setCurrentTag: (tag: string) => void
}) {
  const isActive = (tag: string) => {
    return tag === currentTag
  }
  return (
    <ul className='flex flex-wrap items-center gap-5'>
      {tags.map((tag) => (
        <li key={tag}>
          <button
            type='button'
            className={`rounded-lg px-4 py-1 ${
              isActive(tag)
                ? 'cursor-default bg-slate-700 text-slate-200'
                : 'hover:text-slate-200'
            }`}
            onClick={() => setCurrentTag(tag)}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  )
}

function Posts({ tag }: { tag: string }) {
  const posts = allPosts
    .filter((post) => tag === 'All' || post.tags.includes(tag))
    .sort((p1, p2) =>
      new Date(p1.publishedOn) > new Date(p2.publishedOn) ? -1 : 1
    )

  return (
    <ul className='mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3'>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  )
}
