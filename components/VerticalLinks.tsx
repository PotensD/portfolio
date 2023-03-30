import SolidEnvelope from '~/icons/SolidEnvelope'
import SquareGithub from '~/icons/SquareGithub'
import SquareTwitter from '~/icons/SquareTwitter'
import { links } from '~/links'

export default function VerticalLinks({ className }: { className?: string }) {
	return (
		<div className={`flex flex-col items-center gap-5 ${className}`}>
			<div className='h-36 w-[1px] rounded-full bg-slate-500' />
			<a href={links.TWITTER} target='_blank' rel="noreferrer">
				<SquareTwitter className='h-4 w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200' />
			</a>
			<a href={links.GITHUB} target='_blank' rel="noreferrer">
				<SquareGithub className='h-4 w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200' />
			</a>
			<a href={links.EMAIL} target='_blank' rel="noreferrer">
				<SolidEnvelope className='h-[1.2rem] w-auto text-slate-500 transition hover:scale-125 hover:text-slate-200' />
			</a>
			<div className='h-28 w-[1px] rounded-full bg-slate-500' />
		</div>
	)
}
