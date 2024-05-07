// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
var fs=require("fs");
var data_to_write="Added new text from 4th js"
fs.writeFile("samplefor3.txt",data_to_write,(err)=>{
    console.log("Appended \""+data_to_write+"\" to the file");
})  