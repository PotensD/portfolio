import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import subscriber from '~/trpc/subscriber'
import { createTRPCContext, router } from './trpc'

const appRouter = router({
	subscriber,
})

export default async (req: Request) => {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		router: appRouter,
		req,
		createContext: createTRPCContext,
		onError:
			process.env.NODE_ENV === 'development'
				? ({ path, error }) => {
						console.error(
							`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
						)
				  }
				: undefined,
	})
}

export type AppRouter = typeof appRouter
