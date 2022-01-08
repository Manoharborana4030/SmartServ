function validateemail()  
{  
var x=document.myform.uname.value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
{  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
}
else
{
	validpassword();
}

}
function validpassword()
{
	var inputbox=document.myform.psw.value;
	
	var format = /^(?=.*[A-Z])(?=.*[0-9])(?=.*?[@]).*$/;
	console.log(inputbox);
	console.log(format);
	
	if(inputbox.match(format))
	{
	  alert("Successfull");		
	  return true;
	} 
	else 
	{
		alert("Unsuccessfull");
	    return false;
	}
	
}  