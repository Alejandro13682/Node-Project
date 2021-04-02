const http = require('http')
const server = http.createServer((req, res)=> {
   if(req.url === '/'){
       res.end('Hello from home page')
   }
   if(req.url === '/about'){
       res.end('Hello from about page')
   }
   res.end(`<h1>Sorry, we haven't found your page</h1><br><a href='/'>Back to home</a>`)
})

server.listen(5000)