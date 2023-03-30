import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { connect } from '@planetscale/database'

const connection = connect({
	host: process.env['PLANETSCALE_DB_HOST'],
	username: process.env['PLANETSCALE_DB_USERNAME'],
	password: process.env['PLANETSCALE_DB_PASSWORD'],
})

export const db = drizzle(connection)
