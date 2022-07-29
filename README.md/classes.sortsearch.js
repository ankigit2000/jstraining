class ResturantInfo {
    constructor (Name,location,speciality,additionalFeatures, menu=[]){
        this.Name=Name;
        this.location = location;
        this.speciality= speciality;
        this.additionalFeatures= additionalFeatures;
        this.menu=menu;
    }
    view(){
        console.log(`The ResturantInfo is ${myResturant}`)
    }
}
class ResturantAndMenu extends ResturantInfo{
    constructor(Name,location,speciality,additionalFeatures, menu=[]){
        super(Name,location,speciality,additionalFeatures, menu);
    }
    getFullMenu(){
        let FullMenu=`here is the menu ${this.menu}`;
        return FullMenu;
    }
    // searchMenu(ItemName,myArray){
    //     myArray=this.menu
    //     for(var i=0;i<myArray.length;i++){
    //         if(myArray[i].item==ItemName){
    //             return myArray[i];
    //         }
    //     }
    //}
    sort(){
        this.menu.sort(function (x, y) {
            return x.price - y.price;
        });
        
        console.table(this.menu);
    }
    linearSearch(value)
    {
      let found = false;
      let index = 0;
    
      while(!found && index < this.menu.length) {
       this.menu.forEach(element=>{
          if(value==element.item) {
              found = true;
              console.log(element)
          } else {
              index += 1;
          }
       });
      }
   }
    editName(newName){
        return this.Name=newName;
    }
}


// let myResturant = new ResturantAndMenu('zazam','tvm','shawarma','home delivery',[{item:"Biriyani",price:250,},{item:"chickenKbab",price:350,},{item:"shawarma",price:150,}])
// const newItem={item:"beef",price:350,}
// myResturant.menu.push(newItem);
// myResturant.editName('sharvana bahvan');
// console.log(myResturant);
// myResturant.sort();
// myResturant.linearSearch();


// class User extends ResturantAndMenu {
//     #password;
//     constructor(Name,location,speciality,additionalFeatures,menu=[],email, password) {
//         super(Name,location,speciality,additionalFeatures,menu);
//       this.email = email;
//       this.#password = password;
//     }
  
//     login(email, password) {
//       if (email === this.email && password === this.#password) {
//         console.log('Login Successfully');
//       } else {
//         console.log('Authentication Failed!!');
//       }
//     }
    // getUserMail(){
    //     let mailId=`user mailID is ${this.email}`;
    // }
    // view(){
    //     console.log(`The ResturantInfo is ${myResturant}`)
    // }
// }
// //let user = new User("anki","@nkireddy")
// let user=new User('zazam','tvm','shawarma','home delivery',[{item:"Biriyani",price:250,},{item:"chickenKbab",price:350,},{item:"shawarma",price:150,}],"anki","@nkireddy")
// user.login=("anki","@nkireddy");
//  user.view();
// const obj ={item :'chicken',price:300}
// user.menu.push(obj);
// // console.log(user.getUserMail())
// user.editName('taj hotel');
// console.log("))))))))))))))))))))")
// console.log(user);
// //user.searchMenu();
//  user.linearSearch("Biriyani");
 module.exports={ResturantInfo,ResturantAndMenu}
