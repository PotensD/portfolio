'use client'

import { useEffect, useState } from 'react'
import { subscribe } from '~/actions/subscriber'
import ArrowRight from '~/icons/ArrowRight'
import { useZact } from 'zact/client'

export default function SubscriptionNewsletterForm({
	className,
}: {
	className?: string
}) {
	const { mutate, error, data: success } = useZact(subscribe)
	const [email, setEmail] = useState('')

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		mutate({ email })
	}

	return (
		<div className={className}>
			<form
				className="group flex h-12 items-center rounded-2xl border-2 border-slate-600 focus-within:border-slate-200"
				onSubmit={onSubmit}
			>
				<input
					type='email'
					name='email'
					placeholder='Your email here'
					className='h-full flex-1 bg-transparent pl-7 outline-none placeholder:text-sm placeholder:text-slate-600'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button className='h-full rounded-2xl px-5 text-slate-600 transition active:translate-x-2 group-focus-within:text-slate-200'>
					<ArrowRight className='h-6 w-auto' />
				</button>
			</form>
			{error && (
				<div className='mt-2 text-sm text-red-500'>{error.message}</div>
			)}
			{success && (
				<div className='mt-2 text-sm text-green-500'>
					{' '}
					Thanks for subscribing!{' '}
				</div>
			)}
		</div>
	)
}
