import { createServer } from 'http'
import { queryDB } from './conn.js'

const data = await queryDB("SELECT * FROM students");
console.table(data.rows)