function updateSum(){
    total=document.getElementById('total')
    let myTable = document.getElementById('cart');
    let sum=0;
    for (let row of myTable.rows) {
        for(let cell of row.cells){
           if(cell.innerText[0]=='$'){
            console.log(cell.innerText)
            sum+=parseFloat(cell.innerText.substr(1))
           }
        }
        
    }
    total.value='$'+sum;
}
updateSum();