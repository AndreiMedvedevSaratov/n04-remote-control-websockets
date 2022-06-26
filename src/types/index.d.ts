import { WebSocket } from 'ws'

export interface IWebSocket extends WebSocket {
    isAlive: boolean
}

export interface IRouter {
    [key: string]
    mouse_left: (_x: number) => void
    mouse_right: (_x: number) => void
    mouse_up: (_y: number) => void
    mouse_down: (_y: number) => void
    mouse_position: () => string
    draw_circle: (radius: number) => void
    draw_square: (length: number) => void
    draw_rectangle: (width: number, height: number) => void
    capture_screen: () => Promise<string>
}
