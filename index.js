const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@https://data.mongodb-api.com/app/data-wgpzy/endpoint/data/v1`, (err)=>{
                                if(err) throw err;

                                console.log("DB Connected Successfully");
                                
                            })

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`);
})