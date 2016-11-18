'use strict';
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.enable('trust proxy');

app.get('/', (req, res) => {
	res.send({
		"ipaddress": req.ip,
		"language": req.acceptsLanguages()[0],
		"software": req.get('user-agent')
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});