import { dragMouse, mouseToggle, moveMouse } from 'robotjs'

export default function drawCircle(x: number, y: number, r: number) {
    moveMouse(x - r, y)
    mouseToggle('down')

    for (let i = 0; i <= Math.PI * 2; i += 0.01 * Math.PI) {
        const dx = x - r * Math.cos(i)
        const dy = y - r * Math.sin(i)

        dragMouse(dx, dy)
    }

    mouseToggle('up')
}
