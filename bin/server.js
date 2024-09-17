const app = require('../src/api');

app.use((req, res, next) => {
    next();
});

app.listen(3000, () => {    
    console.log('Servidor online!');
});