function drawAmountAndQuantity(arr, i)
{
    let am = arr[i].amount;
    let qua = arr[i].quantity;

    console.log("Amount:" + am + " " + "Quantity:" + qua);

    var divEl = document.querySelector('div');
    divEl.innerHTML += 
    '<div>' + 
    "Amount:" + am + " " + "Quantity:" + qua + 
    '</div>';
}