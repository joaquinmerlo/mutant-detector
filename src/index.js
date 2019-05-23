const express = require('express');
const app = express();

//Settings
const port = process.env.PORT || 3000;
app.use(express.json());

//Router
app.use(require('./routes/router'))

app.listen(port, () => {
    console.log("listen on port " + port);
})

