//assignment-1  https://docs.google.com/document/d/18e5xt0yO9y9vfXGghn1AdNtb6418iXJR098y5qFIIsI/edit
const fs = require('fs')
// console.log('current path ' + __dirname);
// console.log(__filename);
const path = require('path')
// console.log(path);
const dirPath = path.join(__dirname, 'crud')
// console.log(dirPath);
const filePath = `${dirPath}/input.txt`


//create a file
fs.writeFileSync(filePath, 'this is input.txt')


// read file
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})


//update file
fs.appendFile(filePath, ' Dudhale', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('file is updated');
 })

// rename file
// fs.rename(filePath, `${dirPath}/data.txt`, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('file is renamed');
//  })

// delete file
//fs.unlinkSync(`${dirPath}/input.txt`)






























// const { rejects } = require('assert');
// const fs = require('fs/promises');
// const { resolve } = require('path');

// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// 	return new Promise((resolve,rejects)=>{
// 		fs.writeFile(fileName,fileContent,(err)=>{
// 			if(err){
// 				rejects(err);
// 			}
// 			resolve(fileContent)
// 		});
// 	   resolve(console.log(fileName,fileContent))
// 	});
// }

// myFileWriter('sourabh','dudhale')

// const myFileReader = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// 	const fs = require('fs');
// 	fs.readFile('fileName.txt', { encoding: 'utf-8' },fileName,(err, data) => {
// 	  if (err) {
// 		console.error(err);
// 	  }
// 	  console.log(data);
// 	});
// }
// myFileReader("Hello")

// const myFileUpdater = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// }

// const myFileDeleter = async (fileName) => {
// 	// write code here
// 	// dont chnage function name
// }



// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

