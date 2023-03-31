import IntroductorySection from './IntroductorySection'
import RecentPostSection from './RecentPostSection'

export default function Home() {
	return (
		<>
			<IntroductorySection className='pt-16' />
			<RecentPostSection className='pt-32' />
		</>
	)
}
