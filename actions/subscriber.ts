'use server'

import { db } from '~/db/db'
import { z } from 'zod'
import { zact } from 'zact/server'
import { eq } from 'drizzle-orm/expressions'
import { subscribers } from '~/db/schema/subscribers'

export const subscribe = zact(
	z.object({
		email: z.string().email(),
	}),
)(async (input) => {
	const { email } = input

	const existing = await db
		.select()
		.from(subscribers)
		.where(eq(subscribers.email, email))
		.limit(1)

	if (existing.length > 0) {
		throw new Error('Email already subscribed')
	}

	await db.insert(subscribers).values({ email })

	return true;
})
