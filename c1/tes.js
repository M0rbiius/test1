let t = [
    {
        "amount": 10,
        "quantity": 3
    },
    {
        "amount": 1,
        "quantity": 4
    },
    {
        "amount": 4,
        "quantity": 7
    },
    {
        "amount": 4,
        "quantity": 7
    }
]

// document.addEventListener('DOMContentLoaded', function() {
    
//     let count = t.length;

//     console.log("Length of t array:" + count);

//     let i = 0;
//     let total = 0;

//     var divT = document.querySelector('div#total');

//     while(i < count)
//     {
//         let elem = t[i];
        
//         let tot = elem.amount * elem.quantity

//         total += tot;

//         divT.innerHTML = total;

//         if( (i+1) %2 === 0 )
//         {
//             drawAmountAndQuantity(t, i, true);
//         }
//         else
//         {
//             drawAmountAndQuantity(t, i, false);
//         }

//         i++;
//     }

//     console.log(total);

// }, false);

function persistence(num) {
    let numStr = num.toString();
    while(numStr.length != 1){
      let t = 1;
      numStr.split('').forEach(x => t *= x);
      numStr = t + "";
    }
    console.log(numStr)
    return numStr;
  }

  persistence(5723799)
//FOREACH
// document.addEventListener('DOMContentLoaded', function() {
    
//     let count = t.length;

//     console.log("Length of t array:" + count);
    
//     t.forEach(elem => {

//         var divEl = document.querySelector('div');
//         divEl.innerHTML += 
//         '<div>' + 
//         "Amount:" + elem.amount + " " + "Quantity:" + elem.quantity + 
//         '</div>';

//     });

// }, false);

//FOR
// document.addEventListener('DOMContentLoaded', function() {
    
//     let count = t.length;

//     console.log("Length of t array:" + count);

//     for (let i = 0; i < t.length; i++) {
//         drawAmountAndQuantity(t, i);
//     }

// }, false);

//DOWHILE
// document.addEventListener('DOMContentLoaded', function() {
    
//     let count = t.length;

//     console.log("Length of t array:" + count);

//     let i = 0;

//     do {
//         drawAmountAndQuantity(t, i);

//         i++;
//     }
//     while(i < count)

// }, false);

//WHILE
// document.addEventListener('DOMContentLoaded', function() {
    
//     let count = t.length;

//     console.log("Length of t array:" + count);

//     let i = 0;

//     while(i < count)
//     {
//         drawAmountAndQuantity(t, i);

//         i++;
//     }

// }, false);