import { createTRPCContext, router } from './trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import subscriber from '~/trpc/subscriber'

const appRouter = router({
	subscriber,
})

const handler = async (req: Request) => {
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
export const GET = handler
export const POST = handler
