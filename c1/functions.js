function drawAmountAndQuantity(arr, i, isNormal)
{
    let am = arr[i].amount;
    let qua = arr[i].quantity;
    let tot =  am*qua 
     console.log("Amount:" + am + " " + "Quantity:" + qua + " Total:" + tot);
   
    
    
    var divEl = document.querySelector('div');
    // divEl.innerHTML += 
    // ('<div' + (!isNormal ? ' style="color:red;"' : '') + '>' + 
    // "Amount:" + am + " " + "Quantity:" + qua + 
    // '</div>');

    var htmlBuilder = '';

    if (isNormal) {
        htmlBuilder += '<div style="color:green;">'
    }
    else {
        htmlBuilder += '<div style="color:red;">'
    }
    
    htmlBuilder += "Amount:" + am + " " + "Quantity:" + qua + " " + "Total:" + tot +'</div>';
    
    divEl.innerHTML += htmlBuilder;
}