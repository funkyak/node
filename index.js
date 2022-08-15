const express = require('express');
const app = express();
const port = 3000;
const http = require('http');

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});