import robot from 'robotjs'
import { captureScreen } from '../helpers/capture_screen'
import { IRouter } from '../types/index'
import {
    drawCircle,
    drawRectangle,
    drawSquare,
} from './../helpers/draw_figures'

export default function router(): IRouter {
    const { x, y } = robot.getMousePos()

    return {
        mouse_left: (dx: number) => {
            robot.moveMouse(x - dx, y)
        },
        mouse_right: (dx: number) => {
            robot.moveMouse(x + dx, y)
        },
        mouse_up: (dy: number) => {
            robot.moveMouse(x, y - dy)
        },
        mouse_down: (dy: number) => {
            robot.moveMouse(x, y + dy)
        },
        mouse_position: () => {
            return `${x},${y}`
        },
        draw_circle: (radius: number) => {
            drawCircle(x, y, radius)
        },
        draw_square: (length: number) => {
            drawSquare(x, y, length)
        },
        draw_rectangle: (width: number, height: number) => {
            drawRectangle(x, y, width, height)
        },
        prnt_scrn: async () => {
            const image = await captureScreen(x, y, 200, 200)
            const base64 = await image.getBase64Async(image.getMIME())

            return base64.substring(22)
        },
    }
}
