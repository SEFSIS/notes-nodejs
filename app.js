// main.js app.js server.js index.js//

//Module - по суті файл, який має в собі якийсь певний функціонал
//const { sayHello } = require('./folder/sayHello');
//sayHello();

//Global variables
// console.log("from app.js")
// console.log('dirname',__dirname);
// console.log('filename',__filename);
// console.log('process cwd',process.cwd());


//PATH
//const path = require('node:path');

//const joinedPath = path.join(__dirname,'folder','sayHello.js')
//console.log(joinedPath);
//const normalizedPath = path.normalize('//////test////test1////test2/////test33////test777');
//console.log(normalizedPath);
//const resolvedPath = path.resolve('folder','sayHello.js')
//console.log(resolvedPath);
//const extnamedPath = path.extname('sayHello.js')
//console.log(extnamedPath); // поверне .js
//const pathSep = 'foo\\bar\\baz'.split(path.sep);
//console.log(pathSep); //поверне ['foo', 'bar', 'baz']


//OS-модуль,який іде із підкапоту Libuv(написаний на C++), який має доступ напряму до операційної системи
//const os = require('os');

//console.log(os.cpus());
//console.log(os.arch());//x64
//console.log(os.version());//Windows 10 Home
//console.log(os.release());//10.0.22621

//File system
const fs = require('node:fs');
const path = require('node:path');

//const filePath = path.join(__dirname,'folder','text.txt')
// fs.writeFile(filePath,'Hello girls!!!',(err)=>{
//     if (err) throw new Error(err.message);
// });

// fs.appendFile(filePath, 'Hello again!!!\n',(err)=>{
//     if (err) throw new Error(err.message);
// })

// fs.truncate(filePath,(err)=>{//очищає файл
//     if (err) throw new Error(err.message);
// })

// fs.unlink(filePath,(err)=>{//зітре файл
//     if (err) throw new Error(err.message);
// })


// fs.readFile(filePath,(err,data)=>{
//     if (err) throw new Error(err.message);
//     console.log(data.toString());
// })
//
// fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
//     if (err) throw new Error(err.message);
//     console.log(data);
// })

const filePath = path.join(__dirname,'folder2')

// fs.readdir(filePath,(err,files)=>{
//     console.log(files);//поверне [ 'sayHello.js', 'text.txt' ]
// })

// fs.mkdir(filePath,(err)=>{//створює директорію
//     if (err) throw new Error(err.message);
// })

fs.rmdir(filePath,(err)=>{//видаляє директорію
if (err) throw new Error(err.message);
})