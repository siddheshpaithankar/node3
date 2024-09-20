//entry point file (index.js)
console.log("heloo");
//console.log(window);

//***************************************************************************************** */

const math=require("./math.js");  // import 
console.log(math.add(5,6)); //call  add function present in math.js
console.log(math.sub(5,6)); //call  sub function present in math.js

//**************************************************************************************************** */

const fs=require("fs")//fs is inbuilt module in nodejs it use for creating/writing ,reading  files 
fs.writeFileSync("./test.txt","haoda technologies pvt.ltd");//create and write(syncronous)=>blocking operatin 
//fs.writeFile("./test.txt","ejjejejjjdjeefhehf",(err)=>{}))// (async)=>nonblockin operation


let result = fs.readFileSync("./contact.txt","utf-8");//read from contact.txt(sync)
console.log(result);//print read data
let result1 = fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err)
        {console.log(err)}
    else
    { console.log(result)}
});//read from contact.txt(async)
console.log(result1);//print read data


//const result2 = fs.appendFileSync("./contact.txt","\n dhanajay : 8976879087\n")


fs.cpSync("./contact.txt","copy.txt"); //this function is use for  copy contain of contact file to the newly created copy.txt file


//fs.unlinkSync("./copy.txt"); //this function is use for deleting our filr 

console.log(fs.statSync("./contact.txt"));// show information about this file



/**************************************************************************************** */
const os=require("os")//our pc information 
console.log(os.cpus().length); //our pc maximum threadsize 