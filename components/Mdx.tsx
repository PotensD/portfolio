import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'

// rome-ignore lint/suspicious/noExplicitAny: have no idea how to fix this
function RoundedImage(props: any) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />
}

// rome-ignore lint/suspicious/noExplicitAny: have no idea how to fix this
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
		return <a {...props}>{props.children}</a>
	}

	return (
		<a target='_blank' rel='noopener noreferrer' {...props}>
			{props.children}
		</a>
	)
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
