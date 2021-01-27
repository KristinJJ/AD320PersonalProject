// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.header('statusCode', 200);
    res.send(`<html>
                <h2>Hi there :)</h2>
            </html>`);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});