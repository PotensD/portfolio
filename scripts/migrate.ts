import './env'
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator'
import path from 'path'
import { db } from '~/db/db'

migrate(db, {
  migrationsFolder: path.resolve(__dirname, '../db/migrations'),
})
