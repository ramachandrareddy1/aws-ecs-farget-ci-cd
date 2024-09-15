const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Response from APP-1 ')
})
const port = process.env.PORT | 8080;
app.listen(port,(err)=>{
    if(err){
        console.error(err);
        process.exit(1)
    }
    console.log(`Server runnning on the port: ${port}`)
})