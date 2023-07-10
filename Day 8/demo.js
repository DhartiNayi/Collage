function demoExternalAlert(){
    alert("Internal Alert")
}
function demoExternalconfirm(){
    if(confirm("Are you sure?")){
        alert("yess");
    }
    else{
        alert("nooo")
    }
}
function demoExternalprompt(){
var fname=prompt("enter first name");
var lname=prompt("enter last name");
alert(fname+""+lname);
}
function bodyBGGreen(){
document.body.style.backgroundColor="Green";
}
function divBGGray(){
document.body.style.backgroundColor="Gray";
}