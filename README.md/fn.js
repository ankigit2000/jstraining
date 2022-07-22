const prompt = require('prompt-sync')();
const myModule = require('./class');
const fs =require('fs')
let array = [];
let addetails = function() {
  // const rest = new myModule.restInfo();
  // rest.resturant_Name = prompt('enter the resturant name : ');
  // rest.location = prompt(' enter the locatiion of resturant: ');
  // rest.speciality = prompt(' enter the speciality of the resturant: ');
  // rest.menu = prompt('enter the menu of the resturant: ');
  // // rest.Additional_features=prompt("enter the additional features; ")
  // array.push({
  //   resturant_Name:rest.resturant_Name,
  //    location  : rest.location,
  //    speciality  : rest.speciality,
  //    menu : rest.menu
  // });
  // file();
  return "adding";
}
// function updatedetails() {
//   var  input = prompt("enter any details of resturat(resturant_Name/location/speciality)  :");
 
//      array.forEach((value) => {
//          if (value.resturant_Name == input || value.location== input || value.speciality == input ) {
//              data = prompt("what catergory want to change (resturant_Name/location/specialit) :")
//              if (data === "resturant_Name") {
//                  value.resturant_Name=prompt("enter new name :");
//              }
//              if (data === "locality") {
//               value.location=prompt("enter new location :");
                
//              }
//              else if (data === "experience") {
//               value.speciality=prompt("enter new speciality :");
//               }
             
//              console.log(value)
//              return;
//          }
//      })
 
//  }

let updatedetails = function() {
  console.log(array)
  let input=prompt("enter the category in which to update :")
array.forEach((valu)=>{
  // if(input==valu["resturant_Name "]){
  // console.log("array"+valu.resturant_Name)
  // }
    if(input== valu.resturant_Name||input==valu.location||input== valu.speciality){
      valu.resturant_Name=prompt("enter the new name for resturant: ");
     valu.location=prompt('enter the new location for resturant: ')
      valu.speciality=prompt("enter the new speciality : ");
      valu.menu=prompt("enter the new menu : ");
    }
    else{
      console.log("invalid")
    }
    file();
    return valu;
   // array.pop;
    //array.push(valu)
   // console.log(array)
  });
  return array;
}
//console.log(array);

var deleteInfo = function() {
  var fdata=fs.readFileSync("resturant.txt");
  var data=JSON.parse(fdata);
  console.log(data);
  const index = prompt('enter the detail of array');
  data.forEach((value)=>{
    var i=0;
    if(value.resturant_Name==index){
      array.splice(i,1)
      console.log(array)
      return;
    }
    i++;
    file();
  })
}
function searchInfo() {
  const searchData = prompt('enter the details you want to search');
  let data;
  array.forEach((value) => {
    data = value;
    if (searchData==data.resturant_Name || searchData==data.location  ||  searchData==data.speciality
       || searchData== data.menu|| searchData== data.Additional_features) {
      console.log(value);
    }
  });
}
let user = function()
{
  var check=prompt('confirm that you are a user to view the details and menu: ')
  if(check=="user"){
   console.log(array)
  }else{
    console.log('if you are not a customer no details can view')
  }
}
const file = function(){

fs.writeFileSync('resturant.txt', JSON.stringify(array,null,2));

}
module.exports = {addetails, updatedetails, deleteInfo, user, searchInfo,file};