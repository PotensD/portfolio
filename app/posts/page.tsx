import IntroductorySection from './IntroductorySection'
import PostsSection from './PostsSection'

export default function Posts() {
	return (
		<>
			<IntroductorySection className='pt-16' />
			<PostsSection className='pt-32' />
		</>
	)
}

export const metadata = {
	title: 'Posts',
	description: 'A collection of my thoughts and ideas.',
	openGraph: {
		title: 'Posts | PotensD',
		description: 'A collection of my thoughts and ideas.',
		siteName: 'PotensD',
		images: [
			{
				url: '/og.jpg',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
}
