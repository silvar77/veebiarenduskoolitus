const express = require('express');

const cors = require('cors');

const app = express();

const port = 3000;

app.post('/api/add ', (req, res) => {
    console.log('minu pihta toimub päring');
    res.send('siin on liitmisrakendus!');

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

})


