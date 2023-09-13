const os = require('os');
const http = require('http');


var ut_sec = os.uptime();
var ut_min = ut_sec / 60;
var ut_hour = ut_min / 60;
 
ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);
 
ut_hour = ut_hour % 60;
ut_min = ut_min % 60;
ut_sec = ut_sec % 60;
 

const server = http.createServer((req,res)=>{
    console.log('Request made');
    res.write('A reques has been made');
    res.write("Up time: "
    + ut_hour + " Hour(s) "
    + ut_min + " minute(s) and "
    + ut_sec + " second(s)")
    res.end();
});


server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})


 

 
