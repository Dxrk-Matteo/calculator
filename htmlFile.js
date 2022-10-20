const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    console.log(req.url)
    var contentType = "text/html"
    var fileName = __dirname + "/indexho.html"

    if (req.url === "/home/matteo/Downloads/Eiche.JPG") {
        contentType = "image/jpeg"
        fileName = "/home/matteo/Downloads/Eiche.JPG"
    }
    else if (req.url === "/home/matteo/Downloads/Eichel.jpg") {
        contentType = "image/jpeg"
        fileName = "/home/matteo/Downloads/Eichel.jpg"
    }
    else if (req.url === "/Lichtbit.html") {
        contentType = "text/html"
        fileName = "/home/matteo/calculator/Lichtbit.html"
    }
    else if (req.url === "/home/matteo/Downloads/Lichtbitlogo.svg") {
        contentType = "image/svg+xml"
        fileName = "/home/matteo/Downloads/Lichtbitlogo.svg"
    }
    else {
    }

    fs.readFile(fileName)
        .then(contents => {
            res.setHeader("Content-Type", contentType);
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        })
}


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

