
var numbers = /^[0-9]+$/;
function Validate(){
    cardNum=document.getElementById('card-number');
    cvv=document.getElementById('cvv');
    exDate=document.getElementById('expiry-date');

    if(cardCheck(cardNum))
        {
            if(checkDate(exDate)){

                if(cvvCheck(cvv)){

                }
            }
            
        }
        return false;
}
function checkDate(exDate){
    // exMonth=exDate.
    const eDate=exDate.value.split('-');
    const d= new Date();
    let curYear=d.getFullYear();
    let curMonth=d.getMonth();
    if(parseInt(eDate[0])<=curYear){
        if(parseInt(eDate[0])<curYear || parseInt(eDate[1])<curMonth){

            alert("Your card is Expired")
            exDate.focus();
            return false;
        }
    }
    return true;
}
function cardCheck(cardNum){

    if( cardNum.value.length<=19 && cardNum.value.length>=8 && cardNum.value.match(numbers))
        return true;
    alert("Invalid Card Number")
    cardNum.focus();
    return false;
}
function cvvCheck(cvv){
    
    if( cvv.value.length==3 && cvv.value.match(numbers))
        return true;
    alert("Invalid CVV")
    cvv.focus();
    return false;
}
