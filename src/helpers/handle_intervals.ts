import { ws } from '../index'

export const handle_intervals = setInterval(() => {
    ws.clients.forEach((websocket: any) => {
        if (websocket.isAlive === false) return websocket.terminate()

        websocket.isAlive = false
        websocket.ping()
    })
}, 60000)
