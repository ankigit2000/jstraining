class ResturantInfo {
    constructor (_Name,_location,_speciality,_additionalFeatures, _menu=[]){
        this.Name=_Name;
        this.location = _location;
        this.speciality= _speciality;
        this.additionalFeatures= _additionalFeatures;
        this.menu=_menu;
    }
    view(){
        console.log(`The ResturantInfo is ${myResturant}`)
    }
}
class ResturantAndMenu extends ResturantInfo{
    constructor(_Name,_location,_speciality,_additionalFeatures, _menu=[]){
        super(_Name,_location,_speciality,_additionalFeatures, _menu=[]);
    }
    getFullMenu(){
        let FullMenu=`here is the menu ${this.menu}`;
        return FullMenu;
    }
    editName(newName){
        return this.Name=newName;
    }
}


let myResturant = new ResturantAndMenu('zazam','tvm','shawarma','home delivery',[{meals:200,chapati:100,shwarma:150}])
const newItem={chicken:250,beef:350}
myResturant.menu.push(newItem);
myResturant.editName('sharvana bahvan');
console.log(myResturant);


class User extends ResturantAndMenu {
    #password;
    constructor(_Name,_location,_speciality,_additionalFeatures, _menu=[],email, password) {
        super(_Name,_location,_speciality,_additionalFeatures, _menu);
      this.email = email;
      this.#password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
    getUserMail(){
        let mailId=`user mailID is ${this.email}`;
    }
    // view(){
    //     console.log(`The ResturantInfo is ${myResturant}`)
    // }
}
//let user = new User("anki","@nkireddy")
let user=new User('zazam','tvm','shawarma','home delivery',[{meals:200,chapati:100,shwarma:150}],"anki","@nkireddy")
user.login=("anki","@nkireddy");
// user.view();
const obj ={chicken:250,beef:350}
user.menu.push(obj)
console.log(user);
console.log(user.getUserMail())
user.editName('taj hotel');
console.log(user);
