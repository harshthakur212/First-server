const http = require("http");      //Package Import(Just a package name)
//Storing it in a variable so that we can access it


const port = 8081; // local port no

http
    .createServer((req, res) => {
        // callback function
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello, this is from my server</h1>");
        res.end();
    })
    .listen(port, () => {
        // callback function
        console.log(`Nodejs server started on port ${port}`);
    });

// http://localhost:8081