
const data = require('./rest');
jest.mock("prompt-sync",()=>()=>()=>"1");
 test('function addetails testing ', ()=>{
  expect (data()).toBe("adding");
})
// const info = require('./rest')
// data.addetails();
// var x=data.updatedetails();
// console.log(x)

// test('function addetails testing ', ()=>{
//   expect (data.addetails()).toStrictEqual([
//     {
//       resturant_Name: 'zazam',
//       location: 'tvm',
//       speciality: 'chikken',
//       menu: 'chikken'
//     }
//   ]) 
// })
// test('should be updated',()=>{
//   expect(data.updatedetails()).toStrictEqual([
//     {
//       resturant_Name: "aa",
//       location: "ss",
//       speciality: "dd",
//       menu: "chikken"
//     }
//   ] )
// });

// test('should be updated',()=>{
//   expect(data.deleteInfo().toBeTruthy());
// })
// test('should be updated',()=>{
//   expect(data.searchInfo().toBeTruthy());
// })
// describe('testing update function',()=>{
//     test('update function testing',()=>{
//         expect(data.updatedetails()).toBeTruthy()
//     })
// })
// describe('main functions', () => { 
//     test('should delete ', () => {
//         arr = [] 
// expect(info.deleteInfo("Athul", arr)).toEqual([{  }]); 
// });
// });


























// const fs = require('fs');
// const fileSaved = require('./fn');
// jest.mock('fs')
// describe('Testing File  ', () => {
//     it('Should create restur.file with writeTextFile ', () => {
//         fileSaved.file();
//         expect(fs.writeFile).toHaveBeenCalled();
//     });
// });
