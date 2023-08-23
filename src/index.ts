import * as paperSize from "./paperSize";
// import { SM74 } from "./machines";
import { PaperSize } from "./types";
//
// const getArea = (size: { width: number; length: number }): number =>
//   size.width * size.length;
//
// const getCostPerSheet = (
//   size: { width: number; length: number },
//   gsm: number,
//   costPerKg: number,
//   margin: number,
// ): number => {
//   return getArea(size) * gsm * costPerKg * margin / (1000 * 1000 * 1000);
// };
//
//
// const pages = 212;
// const copies = 1000;
// const width = 148.00;
// const length = 210.00;
//
// const gsm = 80;
// const costPerKg = 85.00;
// const margin = 1.1;
//
// const sideMargin =5;
// const topMargin = 8;
// const bleed = 3.00;
//
// const bindingMargin = 4.00;
// const foldingMargin = 6.00;
// const bookSize = {
//   width: width + bleed * 2 + bindingMargin / 2,
//   length: length + bleed * 2 + foldingMargin / 2,
// };
// console.log(bookSize);
// // const printableArea = { width: paperSize.A1.width - sideMargin * 2, length: paperSize.A1.length - topMargin - SM74.gripperMargin};
//
// // const pagesPerSheet = Math.floor(getArea(printableArea) / getArea(bookSize)) * 2;
//
// // const totalSheets = Math.ceil(pages * (copies + 30) / pagesPerSheet);
// // const costPetSheet = getCostPerSheet(paperSize.A1, gsm, costPerKg, margin);
// Object.values(paperSize).map((size:PaperSize) => {
//
//  const printableArea = { width: size.width - sideMargin * 2, length: size.length - topMargin - SM74.gripperMargin +foldingMargin};
//   const pagesLength = Math.max(Math.floor(printableArea.length / bookSize.length), Math.floor(printableArea.length / bookSize.width));
//   const pagesLength1 = Math.floor(printableArea.length / bookSize.length);
//   const pagesLength2 = Math.floor(printableArea.length / bookSize.width);
//   const pagesWidth= Math.max(Math.floor(printableArea.width/ bookSize.width),Math.floor(printableArea.width / bookSize.length));
//   const pagesWith1= Math.floor(printableArea.width / bookSize.length);
//   const pagesWidth2= Math.floor(printableArea.width/ bookSize.width);
//  const pagesPerSheet =pagesLength * pagesWidth*2;
//   const wastage = (getArea(size) % (bookSize.width*pagesLength * bookSize.length*pagesWidth))/getArea(printableArea) * 100;
//   console.log(size, wastage, pagesPerSheet);
//   // console.log("lengthxlength: "+ pagesLength1+ " lengthxwigth: " +pagesLength2, "width*legnt: "+ pagesWith1, "widthxwidth "+pagesWidth2);
// })
// //
// // const formSize = { width: bookSize.width*2, length: bookSize.length*2 };
// // const totalsize = { width: formSize.width + sideMargin*2, length: formSize.length + topMargin + SM74.gripperMargin }
// // const totalArea = getArea(totalsize);
// // const plateUps = Math.floor(getArea(SM74.maxFeedingSize)/totalArea);
// // console.log(totalsize);
// // console.log(plateUps);
// //
// // const A1paperups =Math.round(getArea(paperSize.A1)/totalArea);
// //
// // console.log(A1paperups);
// //
// //
//
const checkEven=(num: number): number=> {
  if(num % 2 == 0){
    return num;
  }
  else return num-1;
}
const bookWidth = 210.00;
const bookLength = 280.00;

// const paperWidth = 630;
// const paperLength = 453;
//
//
// const sameSides = checkEven(Math.floor(paperWidth / bookWidth)) * checkEven(Math.floor(paperLength / bookLength));
// const crossSides = checkEven(Math.floor(paperWidth / bookLength)) * checkEven(Math.floor(paperLength / bookWidth));
// console.log("Number of pages: "+ Math.max(sameSides, crossSides)*2);

const getArea = (size: { width: number; length: number }): number =>
  size.width * size.length;

Object.values(paperSize).map((size:PaperSize) => {
 
const sameSides = checkEven(Math.floor(size.width/ bookWidth)) * checkEven(Math.floor(size.length/ bookLength));
const crossSides = checkEven(Math.floor(size.width/ bookLength)) * checkEven(Math.floor(size.length/ bookWidth));
  const numberOfPages = Math.max(sameSides, crossSides)*2;
  const paperUsed = bookWidth*bookLength*numberOfPages/2;
  const areaOfPaper = getArea(size);
  const wastage = (areaOfPaper - paperUsed)/areaOfPaper * 100;
  console.log(size, numberOfPages, wastage);
});
