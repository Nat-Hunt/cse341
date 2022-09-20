const express = require('express');
const app = express();

const routes = require("./routes/index");

app.use(routes)

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})