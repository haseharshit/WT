

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
function formValidation(){
    var myPass= document.getElementById("passwordr");
    var myName=document.getElementById("namer");
    if(nameCheck(myName)){
        if(passCheck(myPass)){
        
        }
    }
    return false;
    
}
function passCheck(myPass){
    
    if(myPass.value.length>=8 && myPass.value.match(numbers) &&myPass.value.match(lowerCaseLetters) && myPass.value.match(upperCaseLetters) ){
        
        return true;
    }
    else{
        alert("Password Strong enough!");
        myPass.focus();
        submitr.disabled = false;
    }
}
function nameCheck(myName){
    var letters = /^[A-Za-z]+$/;
    if(myName.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Name must have alphabet characters only');
        myName.focus();
        return false;
    }

}