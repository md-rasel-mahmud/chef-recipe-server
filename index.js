const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log(`server is running in port: ${port}`);
})

app.get('/', (req, res) => {
    res.send('server is live')
})