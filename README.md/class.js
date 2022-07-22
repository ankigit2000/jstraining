class restInfo{
    constructor(resturant_Name,location,speciality,menu,Additional_features){
    this.resturant_Name=resturant_Name;
    this.location=location;
    this.Specialty=speciality;
    this.Menu=menu;
    this.Additional_features=Additional_features;    
}
}


// let user = function(menu='veg and non veg items'){
//     console.log(`the details of this resturant is ${array} with menu items of ${menu}`)
// }
// user();

module.exports={restInfo}