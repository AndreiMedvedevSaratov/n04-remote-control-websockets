import { dragMouse, mouseToggle, moveMouse } from 'robotjs'

export function drawCircle(x: number, y: number, r: number) {
    moveMouse(x - r, y)
    mouseToggle('down')

    for (let i = 0; i <= Math.PI * 2; i += 0.01 * Math.PI) {
        const dx = x - r * Math.cos(i)
        const dy = y - r * Math.sin(i)

        dragMouse(dx, dy)
    }

    mouseToggle('up')
}

export function drawSquare(x: number, y: number, dx: number) {
    mouseToggle('down')
    dragMouse(x + dx, y)
    dragMouse(x + dx, y + dx)
    dragMouse(x, y + dx)
    dragMouse(x, y)
    mouseToggle('up')
}

export function drawRectangle(x: number, y: number, dx: number, dy: number) {
    mouseToggle('down')
    dragMouse(x + dx, y)
    dragMouse(x + dx, y + dy)
    dragMouse(x, y + dy)
    dragMouse(x, y)
    mouseToggle('up')
}
