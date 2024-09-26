const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbPath = path.join(__dirname, 'models', 'db.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

app.get('/', (req, res) => {
    res.send('Api online');
});

const acharId = (array, id) => array.find(item => item.id === id);

app.get('/restaurants', (req, res) => {
    res.json(db.restaurants);
});

app.get('/restaurants/:id', (req, res) => {
    const restaurant = acharId(db.restaurants, req.params.id);
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).send('Restaurante não encontrado');
    }
});

app.get('/foods', (req, res) => {
    res.json(db.foods);
});

app.get('/foods/:id', (req, res) => {
    const food = acharId(db.foods, req.params.id);
    if (food) {
        res.json(food);
    } else {
        res.status(404).send('Alimento não encontrado');
    }
});

app.get('/users', (req, res) => {
    res.json(db.users);
});

app.get('/users/:id', (req, res) => {
    const user = acharId(db.users, req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

module.exports = app;
