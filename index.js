import fs from 'fs';

// File Created...

fs.writeFile("demo.txt", "Hello node!!! How are you ?", (err)=>{
    console.log("File is successfully created");
    console.log("write ::",err);
});

// Read File demo.txt...

fs.readFile('./demo.txt','utf8', (err,data) => {
    console.log("read ::", data);
    console.log("read ::", err);
});

// File Update...

fs.appendFile('./demo.txt'," Node is already fine !!!", (err,data)=>{
    console.log("appendFile ::",data);
    console.log("appendFile ::",err);
});

// File Rename demo.txt to final-demo.txt...

fs.rename('demo.txt','final-demo.txt',(err)=>{
    console.log("rename ::",err);
});

// File Remove final-demo.txt...

fs.unlink('./final-demo.txt',(err)=>{
console.log("unlink  :: ",err);

});

