const prompt = require("prompt-sync")()
const file=require('./fn')
function main(){
try {
    var input;
    while(input!="false")
    {
        console.log("\n1.addetails\n2.updatedetails\n3.deleteInfo\n4.exit\n5.user\n6.searchInfo\n")
        input=prompt("enter the input option : ")
        switch(input)
        {
            case "1":
                // file.addetails()
                // input="false";
                return "adding";
                break;
            case "2":
                file.updatedetails()
                break;
            case "3":
                file.deleteInfo()
                break;
            case "4":
                file.console.log("exit")
            case "5":
                file.user()
                break;
                case "6":
                file.searchInfo()
                break;
            default:
                throw "invalid"
        }
    }
}
catch(e){
    console.log(e.message);
}
}
module.exports=main;