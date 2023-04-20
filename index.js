const number = document.querySelector('#number');
const btn = document.querySelector('#btn');
const p1 = document.querySelector('.p1socute');
const userNum = number.value;

btn.addEventListener("click",function(){
    let arr = [];

    for (let i = 2; i <= number.value; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            arr.push(i);
        }
    }

    
    let contain = "";
    arr.forEach(function(i,index) {
       
             
            
                contain += `${i},`;
            
         
    });

    console.log(arr);
    p1.innerHTML = contain;
});