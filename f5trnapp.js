const fs = require('fs');
const myhttp = require('http');
const os = require('os');

const myosname = os.platform();
const myosrelease = os.release();
const myostype = os.type();
const myoscpus = os.cpus();
const myoshomedir = os.homedir();
const myoshostname = os.hostname();
const myosmachine = os.machine();
const myosnetworkInterfaces = os.networkInterfaces();
const myimg1 = fs.readFileSync('./f5logo.png');

const mywebserver = myhttp.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200,'OK',{'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h2>F5 Training Application Home Page</h2>');
        res.write("<h4>Your requested URL path was : " + req.url + "</h4>");
        res.write("<h4>Change it to /about to find out about the platform</h4>");
        res.write("<h4>Change it to /logo to see a picture</h4>");
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200,'OK',{'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h2>Platform:</h2');
        res.write('<br> </br>');
        res.write("<h4>Operating System: " + `${myosname}` + "</h4>");
        res.write("<h4>Release: " + `${myosrelease}` + "</h4>");
        res.write("<h4>Type: " + `${myostype}` + "</h4>");
        res.write("<h4>Home Directory: " + `${myoshomedir}` + "</h4>");
        res.write("<h4>Hostname: " + `${myoshostname}` + "</h4>");
        res.write("<h4>Machine: " + `${myosmachine}` + "</h4>");
        res.write("<h4>Networks: " + `${myosnetworkInterfaces}` + "</h4>");
        res.write('</html>');
        res.end();
    } else if (req.url === '/logo') {
        res.writeHead(200,'OK',{'Content-Type': 'image/png'});
        res.end(myimg1,'binary');
    } else {
        res.writeHead(200,'OK',{'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<h3>Resource not found</h3');
        res.write('</html>');
        res.end();
    }
})

mywebserver.listen(3000, () => {
        console.log('F5 Training Application listening on port 3000');
})
