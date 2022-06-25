import { Duplex } from 'stream'
import router from '../router/router'

export default function readableStream(duplex: Duplex) {
    let data = ''

    return async () => {
        try {
            let chunk

            while (null !== (chunk = duplex.read())) {
                data += chunk
            }

            const [command, ...params] = data.split(' ')
            const [x, y] = params.map(Number)

            const runCommand = router()

            const isCommandOk = Object.prototype.hasOwnProperty.call(
                runCommand,
                command
            )

            if (!isCommandOk) {
                throw new Error(`${command} command not found`)
            }

            console.log(command, ...params)

            const result = await runCommand[command](x, y)

            duplex.write(`${command} ${result}\0`)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
            }
        } finally {
            data = ''
        }
    }
}
