// *** Write your code here***

let display = document.querySelector('#display')

function  calcNumbers(x){
   display.value = display.value + x;
   console.log(x)
}

function specKeys(y){
  console.log(y)
  if(y === 'c'){
    display.value = "";
  }else if(y === 'del'){
    let arr = display.value.split('');
    arr.pop();
    display.value = arr.join('');
  }
}
