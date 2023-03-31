import { initTRPC } from '@trpc/server'
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import SuperJSON from 'superjson'
import { db } from '~/db/db'

type CreateContextOptions = FetchCreateContextFnOptions & {
	readonlyDb: typeof db
}

export function createInnerTRPCContext(opts: CreateContextOptions) {
	return {
		db: db,
		...opts,
	}
}

export function createTRPCContext(opts: FetchCreateContextFnOptions) {
	return createInnerTRPCContext({
		readonlyDb: db,
		...opts,
	})
}

const t = initTRPC.context<typeof createTRPCContext>().create({
	transformer: SuperJSON,
})

export const publicProcedure = t.procedure
export const router = t.router
export const middleware = t.middleware
