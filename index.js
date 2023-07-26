const { appendFile, unlink } = require('fs');
const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	await fs.writeFile(fileName, fileContent);
	console.log(`${fileName} file created`);
  };
  
  const myFileReader = async (fileName) => {
	const content = await fs.readFile(fileName, 'utf-8');
	console.log(`${fileName}  content`,content);
  };
  
  const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName, fileContent);
	console.log(`${fileName} updated sucessfull`);
  };
  
  const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName);
	console.log(`${fileName} has deleted`);
  };

   async function start() {
	await myFileWriter('file.txt', 'hello');
	await myFileReader('file.txt');
	await myFileUpdater('file.txt', ' World');
	await myFileReader('file.txt');
	await myFileDeleter('file.txt');
  };
  
  start();
  

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }