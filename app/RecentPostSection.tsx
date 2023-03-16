import Link from 'next/link'
import PostCard from '~/components/PostCard'
import { Post } from '~/typing'

export const posts: Post[] = [
  {
    slug: 'lorem-ipsum-dolor-sit-amet',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    publishedDate: '2021-01-01',
    thumbnail: '/images/thumb-demo-post-1.avif',
    tags: ['Laravel', 'Rust', 'WebDev'],
  },
  {
    slug: 'consectetur-adipiscing-elit',
    title: 'Consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    publishedDate: '2021-01-01',
    thumbnail: '/images/thumb-demo-post-2.avif',
    tags: ['Laravel', 'Rust', 'WebDev'],
  },
  {
    slug: 'sed-do-eiusmod-tempor',
    title: 'Sed do eiusmod tempor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    publishedDate: '2021-01-01',
    thumbnail: '/images/thumb-demo-post-3.jpg',
    tags: ['Laravel', 'Rust', 'WebDev'],
  },
]

export default function RecentPostSection({
  className,
}: {
  className?: string
}) {
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
