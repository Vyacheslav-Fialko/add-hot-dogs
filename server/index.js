const express = require('express');
const productRouter = require('./router/ProductRouter');
const corsMiddleware = require('./middleware/middleware');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (reg, res ) => {
    res.end(`
    <div><h1>HOME PAGE</h1></div>
    `)
})

app.use(corsMiddleware);
app.use(express.json());
app.use('/api', productRouter);

app.listen(PORT, () => console.log(PORT));