// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
var fs=require("fs");
fs.readFile("sample_for_medium.txt","utf-8",(err,data)=>{
    if(err){
        throw err;
    }
    var cleanedData=data.replace(/\s+/g,' ').trim();
    fs.writeFile("sample_for_medium.txt",cleanedData,(err)=>{
        if(err) throw err;
        console.log("Removed extra spaces from the txt file");
    })
})