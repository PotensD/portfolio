'use client'

import { useState } from 'react'
import { trpc } from '~/app/trpc'
import ArrowRight from '~/icons/ArrowRight'

export default function SubscriptionNewsletterForm({
	className,
}: {
	className?: string
}) {
	const {
		status,
		error,
		mutate: subscribe,
	} = trpc.subscriber.subscribe.useMutation()
	const [email, setEmail] = useState('')

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		subscribe(
			{ email },
			{
				onSuccess() {
					setEmail('')
				},
			},
		)
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
			{status === 'error' && (
				<div className='mt-2 text-sm text-red-500'>{error.message}</div>
			)}
			{status === 'success' && (
				<div className='mt-2 text-sm text-green-500'>
					{' '}
					Thanks for subscribing!{' '}
				</div>
			)}
		</div>
	)
}
