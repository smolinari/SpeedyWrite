import fs from 'node:fs';


console.time('NodeWriteFile');

let content = '';

for(let i = 0; i < 90000; i++) {
  content += `This is line ${i}\n`            
}

fs.writeFile('./files/nodeWriteFileImproved.txt', content, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
  });

console.timeEnd('NodeWriteFile');
