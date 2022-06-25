import { createWebSocketStream } from 'ws'
import { IWebSocket } from '../types'
import readableStream from './readable_stream'

export function handleConnection() {
    return async (ws: IWebSocket) => {
        ws.isAlive = true

        ws.on('pong', () => {
            ws.isAlive = true
        })

        const duplexStream = createWebSocketStream(ws, {
            encoding: 'utf8',
            decodeStrings: false,
        })

        duplexStream.on('readable', readableStream(duplexStream))
    }
}
