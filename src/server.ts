import express from 'express'

const app = express();

app.get('/', (req, res) => {
    return res.json({message: 'API is Only!'})
})

app.listen(3000)