import PostCard from '~/components/PostCard'
import { posts } from '../RecentPostSection'

export default function PostsSection({ className }: { className?: string }) {
  return (
    <section className={className}>
      <Tags />
      <Posts />
    </section>
  )
}

function Tags() {
  const tags = ['All', 'Laravel', 'Tailwind', 'WebDev']
  const isActive = (tag: string) => {
    return tag === 'All'
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
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  )
}

function Posts() {
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
