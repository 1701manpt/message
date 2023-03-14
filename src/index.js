const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
    });
});

const { check, User } = require('./connection')

check()
app.get('/users', async (req, res) => {
    const users = await User.findAll()

    res.json({
        data: users
    })
});

app.get('/create', async (req, res) => {
    const users = await User.create({
        account: req.query.account || 'accountdefault',
        password: req.body.password || '0000'
    })

    res.json({
        data: users
    })
});

http.listen(3000, () => {
    console.log('http://localhost:3000/');
});
