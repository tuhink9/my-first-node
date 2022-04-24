const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Started my first node project and it is working!!!!')
})

const users = [
    {id:1, name:'john', email:'john@gamail.com'},
    {id:2, name:'shawn', email:'shawn@gamail.com'},
    {id:3, name:'nick', email:'nick@gamail.com'},
    {id:4, name:'david', email:'david@gamail.com'},
    {id:5, name:'dyan', email:'dyan@gamail.com'},
    {id:6, name:'richardo', email:'richardo@gamail.com'},
    {id:7, name:'maria', email:'maria@gamail.com'}
]
app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['apple', 'mango', 'orange'])
})
app.get('/fruits/mango', (req, res) => {
    res.send(['fazli'])
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})
app.listen(port, () => {
    console.log('Yes! Succesful to do backend with express in node!!', port);
})