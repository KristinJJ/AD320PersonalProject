// import express from 'express'
const express = require("express");
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello William");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});