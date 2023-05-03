const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

const port = 5000 || process.env.PORT;

app.listen(port, () => {
    console.log(`server is running in port: ${port}`);
})

// server check response  
app.get('/', (req, res) => {
    res.send('server is live')
})

// enter url/chefs to send response chefs information 
const chefs = require('./data/chefs.json')

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

// enter url/single-chef to send response single-chef information 
const allSingleChef = require('./data/single-chef.json');

app.get('/single-chef/:id', (req, res) => {
    const id = req.params.id;
    
    const singleChef = allSingleChef.find(chefInfo => chefInfo.id == id);
    res.send(singleChef);
})
