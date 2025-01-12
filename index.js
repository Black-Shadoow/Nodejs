// Import the User model
const fs=require('fs');
const User = require('./user.js');
const { add, sub, mul, div } = require('./math.js'); 

// Create a new user instance
const user = new User("Bibek", 25, "bibek@example.com");

// Use the model's method
console.log(user.getDetails());
console.log("The sum of two number is ",add(5,8));
console.log("The diffirence of two number is ",sub(56,8));
console.log("The mul of two number is ",mul(5,8));
console.log("The div of two number is ",div(40,8));

//File handaling in Node js 
// 1.synchronous file handaling

fs.writeFileSync('./bibek.txt', 'Hey, I am synchronous file handling', 'utf-8');
console.log('File written successfully!');

// append synchronous 
fs.appendFileSync('./bibek.txt','This content will be appended.','utf-8' ,(err)=>{
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Content appended successfully!');
})
//read file 
fs.readFile('./shadoow.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n', data);
});
// 2. Asynchronous file handaling
fs.writeFile('./shadoow.txt', 'Hey, I am asynchronous file handling', 'utf-8',(err)=>{
    if (err) {
        console.error('Error writing the file:', err);
        return;
    }
    console.log('File written successfully!');
});
// append Asynchronous file handaling
fs.appendFile('./shadoow.txt','Hey  This content will be appended' ,'utf-8',(err)=>{
    console.log('Content appended successfully!');
} )

// Create a Http server 
const http = require('http');
const PORT=8000;

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received \n`;

    fs.appendFile('./log.txt', log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
            res.end("Internal Server Error");
            return;
        }

        switch (req.url) {
            case '/':
                res.end("HomePage");
                break;

            case '/about':
                res.end("About Page");
                break;

            default:
                res.end("404 Error Page");
        }
    });
});

myServer.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});

