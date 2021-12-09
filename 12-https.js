const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to out home page.')
    }
    if (req.url === '/about') {
        res.end('here is our short history.')
    }
    res.end(`
    <h1>Opps!</h1>
    <p> we can't seem to find the page you are lookinf for </P>
    <a href = '/'>back home</a>
    `)
})

server.listen(5000)