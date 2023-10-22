//EVENTS
// const Events = require('node:events');
//
// const eventEmitter = new Events();
//
// eventEmitter.on('click', () => { //декларуємо івент
//     console.log('click click click');
// })
//
// eventEmitter.emit('click');//виклик івенту
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
// eventEmitter.emit('click');
//
// eventEmitter.once('click once', () => {
//     console.log('click once');
// })
//
// console.log(eventEmitter.eventNames());
//
// eventEmitter.emit('click once');//click once
// eventEmitter.emit('click once');//event does not exist
//
// console.log(eventEmitter.eventNames());

//STREAM
// const fs = require('node:fs');
// const path = require('node:path');
//
//
// const readStream = fs.createReadStream(path.join(__dirname, 'folder', 'text3.txt'),{highWaterMark: 128 * 1024});
// const writeStream = fs.createWriteStream(path.join(__dirname, 'folder', 'text2.txt'));
//
// readStream.on('data', (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk);
// });
//
// readStream.pipe(writeStream);
//
// readStream.on('error', () => {
//     console.log('error happened');
//     readStream.destroy();
//     writeStream.end('ERROR HAPPENED');
// });

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    { id: 1, name: "Іван", email: "ivan@example.com" },
    { id: 2, name: "Марія", email: "maria@example.com" },
    { id: 3, name: "Петро", email: "petro@example.com" },
    { id: 4, name: "Анна", email: "anna@example.com" },
    { id: 5, name: "Олександр", email: "oleksandr@example.com" },
    { id: 6, name: "Юлія", email: "yulia@example.com" },
    { id: 7, name: "Василь", email: "vasyl@example.com" },
    { id: 8, name: "Оксана", email: "oksana@example.com" },
    { id: 9, name: "Сергій", email: "serhiy@example.com" },
    { id: 10, name: "Наталія", email: "natalia@example.com" }
];

app.get('/users', (req,res) => {
    res.json({
        data:users,
    })
})

app.get('/users/:id', (req, res) => {
    const {id} = req.params;

    res.json({
        data: users[+id - 1],
    })
})

app.post('/users', (req, res) => {
    users.push(req.body);

    res.status(201).json({
        message:"User created",
    });
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;

    users.splice(+id - 1, 1);

    res.sendStatus(204);
})

app.put('/users/:id',(req,res)=>{
    const {id} = req.params;

    users[id] = req.body;

    res.json({
        message: 'User updated'
    })
})

const PORT = 5005;

app.listen(PORT, () => {
    console.log(`Server has successfully started on PORT ${PORT}`)
});