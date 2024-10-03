const http = require('http');
const port = process.env.PORT || 5000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // console.log(req);
    // Set the response HTTP header with HTTP status and Content type
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/'){
    res.end(`
            <h1>Home Page</h1>
            <h2>Welcome to the Home Page</h2>
            <h3>Haris XI punjab board</h3>
            <a href="http://localhost:5000/about"><Button>About</Button></a>   
        `);

    }
    else if(req.url == '/about'){
        res.end ('<h1> About page </h1> <p> it is about page </p> ');
    }
      else if(req.url == '/contact'){
        res.end ('<h1>contacy us "0333333 </p> ');
    }
        else {
            res.statusCode = 404 ;
            res.end('<h1>404 page not found</h1> <hr><br> <a href = "http://localhost:5000/">go back</a>')
        }
});

// Make the server listen on port 3000
server.listen(port, 'localhost',() => {
    console.log(`Server running at http://localhost:${port}/`);
});
/*******
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * asssssssssssssssssssssssssssssssssssss
 * 
 */

