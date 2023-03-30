import { z } from 'zod'
import { eq } from 'drizzle-orm/expressions'
import { publicProcedure, router } from '~/pages/api/trpc/trpc'
import { subscribers } from '~/db/schema/subscribers'
import { TRPCError } from '@trpc/server'

export default router({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { readonlyDb, db } = ctx
      const { email } = input

      const existing = await readonlyDb
        .select()
        .from(subscribers)
        .where(eq(subscribers.email, email))
        .limit(1)

      if (existing.length > 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Email already subscribed',
        })
      }

      await db.insert(subscribers).values({ email })

      return
    }),
})
