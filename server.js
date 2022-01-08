var express=require('express');
var app=express();

var PORT=process.env.PORT || 3000;

//set routing path for the pages 
app.use(express.static(__dirname+'/public'));

app.get('/task1',function(req,res)
{
	res.sendFile(__dirname+'/public/task1.html');
});


app.listen(PORT,function()
{
	
	console.log("Express started at port "+PORT+" at "+new Date().toString());
});