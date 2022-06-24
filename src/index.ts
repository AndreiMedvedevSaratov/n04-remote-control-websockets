import { httpServer } from './http_server/index'
import { WebSocketServer } from 'ws'
import * as dotenv from 'dotenv'
import { resolve } from 'path'
import { cwd } from 'process'

import { handle_intervals } from './helpers/handle_intervals'
// import { handle_connection } from './handlers/handle_connection'

dotenv.config({ path: resolve(cwd(), '.env') })

const HTTP_PORT = process.env.HTTP_PORT || 3000
const WS_PORT = Number(process.env.WS_PORT) || 8081

httpServer.listen(HTTP_PORT).on('listening', () => {
    console.log(`Start front server on the ${HTTP_PORT} port`)
})

export const ws = new WebSocketServer({ port: WS_PORT })

ws.on('connection', handle_connection())

ws.on('close', () => {
    clearInterval(handle_intervals)
})
