//here we are using the pdf-merger nodejs module .its a inbulit module which is used to merge the pdfs 
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs=async (p1,p2) => {// p1,p2 as we are considering the merging of the two pdfs at a time 
  await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('2.pdf'); // merge all the pages 
  //u can check the documentation if u need to only merge particular page nos 

  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports={mergePdfs}