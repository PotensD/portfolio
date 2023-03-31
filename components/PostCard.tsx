import Tag from './Tag'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '~/.contentlayer/generated'

type PostCardProps = {
	className?: string
} & Post

export default function PostCard({
	className,
	slug,
	thumbnail,
	title,
	summary,
	tags,
}: PostCardProps) {
	return (
		<div className={`space-y-3 ${className}`}>
			<Link href={`/posts/${slug}`} className='block'>
				<Image
					src={thumbnail}
					alt='Thumbnail'
					width={400}
					height={300}
					className='aspect-[4/3] !w-full rounded'
				/>
			</Link>
			<Link href={`/posts/${slug}`} className='block'>
				<h3 className='text-base font-medium'>{title}</h3>
			</Link>
			<div>
				<Link href={`/posts/${slug}`} className='block'>
					<p className='mt-2 text-sm text-gray-500'>{summary}</p>
				</Link>
				<div className='mt-2 flex gap-4'>
					{tags.map((tag, i) => (
						<div key={tag}>
							<Tag tag={tag} />
							{i < tags.length - 1 && <span className='ml-4'>&middot;</span>}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
