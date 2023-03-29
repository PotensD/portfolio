import { initTRPC } from '@trpc/server'
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import SuperJSON from 'superjson'

type CreateContextOptions = FetchCreateContextFnOptions & {
};

export function createInnerTRPCContext(opts: CreateContextOptions){
  return opts
}

export function createTRPCContext(opts: FetchCreateContextFnOptions){
  return createInnerTRPCContext(opts);
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: SuperJSON,
})

export const publicProcedure = t.procedure
export const router = t.router
export const middleware = t.middleware
