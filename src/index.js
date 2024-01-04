const express = require('express');

app = express();

const PORT = 3030;


app.get('/', (req, res)=>{
    res.send('Work!')
})

app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}...`)})