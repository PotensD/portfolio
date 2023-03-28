import { z } from 'zod'
import { publicProcedure, router } from '~/app/api/trpc/[trpc]/trpc'

export default router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
})
