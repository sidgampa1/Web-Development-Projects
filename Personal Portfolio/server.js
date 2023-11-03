const client = require('@sendgrid/mail');
const express = require('express');
const cors = require('cors');

const app = express();

client.setApiKey(process.env.SENDGRID_API_KEY);


app.use(cors());
app.use(express.json());

app.use("/email", (req, res) => {
    // personalization = 
})
