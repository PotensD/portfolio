import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import Image from 'next/image'

function RoundedImage(props: any) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />
}

const CustomLink = (props: any) => {
	const href = props.href

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

const components = {
	Image: RoundedImage,
	a: CustomLink,
}

export default function Mdx({
	code,
	className,
}: {
	code: string
	className?: string
}) {
	const Component = useMDXComponent(code)

	return (
		<article className={`prose prose-invert prose-sky ${className}`}>
			<Component components={components} />
		</article>
	)
}
