import express from 'express'
import socketIo, { Socket } from 'socket.io'

const app: express.Application = express()

app.get('/', (req, res) => res.send('asd'))

const server = app.listen(3000, () => console.log('listening on por 3000'))

const io = socketIo(server)
io.on('connection', (socket: Socket) => {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', (data) => {
        console.log(data)
        io.emit('MESSAGE', data)
    })
})