import { queryDB, closePool } from './conn.js'

try {
    const data = await queryDB('SELECT * FROM students')
    console.table(data.rows)
} catch (error) {
    console.error('Failed to query database:', error)
} finally {
    await closePool()
}