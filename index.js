'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send(`Hello ${process.env.ENVIRONMENT}!`));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
