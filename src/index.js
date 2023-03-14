const express = require('express');
const sequelize = require('./connection');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const User = require('./models/user')

app.use(express.static('public'));

const delDataAndSyncModel = async () => {
    // Đồng bộ hóa database với Sequelize
    await sequelize.sync()
}

// delDataAndSyncModel()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.json({
        data: users
    })
});

app.get('/users/add', async (req, res) => {
    const users = await User.create({
        account: req.query.account,
        password: req.query.password,
        email: req.query.email,
    })
    res.json({
        data: users
    })
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ', msg);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
});

http.listen(3000, () => {
    console.log('http://localhost:3000/');
});
