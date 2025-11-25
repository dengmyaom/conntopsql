import { Pool } from 'pg'
import 'dotenv/config'

const pool = new Pool({
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:     process.env.DB_HOST,
    port:     Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    max:      Number(process.env.DB_POOL_SIZE) || 10,
    idleTimeoutMillis: 30_000
})

async function queryDB(queryText, params = []) {
    const client = await pool.connect()
    try {
        return await client.query(queryText, params)
    } finally {
        client.release()
    }
}

async function closePool() {
    await pool.end()
}

export {
    queryDB,
    closePool
}