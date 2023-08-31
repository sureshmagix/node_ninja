// Read fils

const fs = require('fs');   // fs- file system

fs.readFile('./docs/blog1.txt', (err,data)=>{
    if(err) {
        console.log(err);
       }
      console.log(data); // This will return only a buffer
      // in order to view string we have to convert the buffer to string
      console.log(data.toString());
})

console.log('last line'); //this line is executed first 

// write files

fs.writeFile('./docs/blog1.txt','Hello, world',()=>{   // What ever is there in blog1.txt is replace with Hello world
    console.log('File was written');

});
 
fs.writeFile('./docs/blog2.txt',' This is a new file created',()=>{ // A new blog2 file is created
    console.log("Blog2 created successfully");
})
//directories
if(!fs.existsSync('./assets')){// If the Does not Exsist create a folder name called assets
    fs.mkdir('./assets',(err)=>{
        if(err)
        { console.log(err)};
        console.log('NEw folder assets created successfully')
    })
    
} else {console.log('Folder name already exsist.. so we are removing it ');

fs.rmdir('./assets',(err)=>{
    if(err){ console.log(err)};
    console.log('Assets dir removed ')
})

}




// deleting files

if(fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt',(err)=>{
        if(err){console.log(err)}
        console.log('file deleted');
    })
}