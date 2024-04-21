const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);
    });

    socket.on('draw', (room, data) => {
        io.to(room).emit('draw', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

app.use(express.static("public"));

let PORT = process.env.PORT || 8080;
httpServer.listen(PORT, () => console.log(`Server started on Port ${PORT}.`));