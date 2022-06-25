import robot from 'robotjs'
import { IRouter } from '../types/index'

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
    }
}
