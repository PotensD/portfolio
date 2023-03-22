import Link from 'next/link'
import { allPosts } from '~/.contentlayer/generated'
import PostCard from '~/components/PostCard'

export default function RecentPostSection({
  className,
}: {
  className?: string
}) {
  // sort on publishedOn
  const posts = allPosts.sort((p1, p2) =>
    new Date(p1.publishedOn) > new Date(p2.publishedOn) ? -1 : 1
  )

  return (
    <section className={className}>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <div className='h-1.5 w-3 rounded-full bg-slate-600' />
          <h2>
            My <span className='text-sky-400'>recent posts</span>
          </h2>
        </div>
        <Link
          href='/posts'
          className='text-sm text-slate-500 transition hover:text-slate-200'
        >
          Show more
        </Link>
      </div>

      <ul className='mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3'>
        {posts[0] && (
          <li>
            <PostCard {...posts[0]} />
          </li>
        )}
        {posts[1] && (
          <li>
            <PostCard {...posts[1]} />
          </li>
        )}
        {posts[2] && (
          <li className='hidden xl:block'>
            <PostCard {...posts[2]} />
          </li>
        )}
      </ul>
    </section>
  )
}
