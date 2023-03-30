import { InferModel, sql } from 'drizzle-orm'
import {
  datetime,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core'

export const subscribers = mysqlTable(
  'subscribers',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull(),
    createdAt: datetime('created_at')
      .notNull()
      .default(sql`NOW()`),
  },
  (subscribers) => ({
    emailIndex: uniqueIndex('email_index').on(subscribers.email),
  })
)

export type Subscriber = InferModel<typeof subscribers>
export type InsertingSubscriber = InferModel<typeof subscribers, 'insert'>
export type SelectingSubscriber = InferModel<typeof subscribers, 'select'>
