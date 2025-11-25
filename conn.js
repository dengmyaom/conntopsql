import {Client} from 'pg'
import 'dotenv/config'

const client = new Client({
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    database: process.env.DB_NAME
})

async function openDB() {
    await client.connect()
}

async function closeDB() {
    await client.end()
}

async function queryDB(q) {
    openDB()
    const data = await client.query(q)
    closeDB()
    return data
}

export {
    openDB,queryDB,closeDB
}