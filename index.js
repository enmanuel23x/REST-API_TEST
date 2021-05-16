const app = require('./server')
const NODE_ENV = "develop"
const port = NODE_ENV === 'production' ? 80 : 2000;
app.listen(port, function () {
    console.log(`Backend corriendo en localhost:${port}`);
});