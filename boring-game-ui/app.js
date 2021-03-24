const express = require('express');
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

const SERVER_URL = "http://localhost:3030";

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.use('/api/*', createProxyMiddleware({target: SERVER_URL, changeOrigin: true}));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));