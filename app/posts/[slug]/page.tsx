import Image from 'next/image'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { allPosts } from '~/.contentlayer/generated'
import Tag from '~/components/Tag'
import Mdx from '~/components/Mdx'
import { Metadata } from 'next'

type PostDetailPageProps = {
  params: {
    slug: string
  }
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  const { slug } = params
  const post = allPosts.filter((post) => post.slug === slug)[0]

  if (!post) {
    notFound()
  }

  const { tags, title, thumbnail, body, publishedOn } = post
  const { code } = body

  return (
    <main className='pt-16'>
      <div className='flex grid-cols-12 flex-col-reverse justify-between gap-4 lg:grid'>
        <div className='col-span-7 pb-3'>
          <h1 className='text-5xl font-bold text-slate-200 lg:text-left'>
            {title}
          </h1>
          <div className='mt-3'>
            <span className='ml-[0.16rem] text-sm font-bold'>
              {format(new Date(publishedOn), 'MMMM dd, yyyy')}
            </span>
          </div>
        </div>
        <div className='col-span-5'>
          <div className='mt-12'>
            <Image
              src={thumbnail}
              alt='Thumbnail'
              width={400}
              height={300}
              className='aspect-[4/3] !w-full rounded-2xl'
            />
          </div>
        </div>
      </div>

      <div className='mt-8 lg:-mt-20'>
        <div className='mb-1 flex gap-4'>
          {tags.map((tag, i) => (
            <div key={tag}>
              <Tag tag={tag} />
              {i < tags.length - 1 && <span className='ml-4'>&middot;</span>}
            </div>
          ))}
        </div>
        <div className='h-[1px] bg-slate-500' />
      </div>

      <div className='mt-32 flex justify-center'>
        <Mdx className='max-w-[100%] lg:max-w-4xl' code={code} />
      </div>
    </main>
  )
}

export function generateMetadata({
  params,
}: PostDetailPageProps): Metadata | undefined {
  const { slug } = params
  const post = allPosts.filter((post) => post.slug === slug)[0]
  if (!post) return

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedOn,
      images: [
        {
          url: post.thumbnail,
        },
      ],
      locale: 'en-US',
      type: 'article',
    },
  }
}
