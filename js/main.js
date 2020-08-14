let btnAdd= document.querySelector('#add');
let btnSubtract= document.querySelector('#subtract');
let input= document.querySelector('input');
 

 btnAdd.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});

btnSubtract.addEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});

let total = 0;

function render(){
    input.innerHTML = total;
    if(total < 0){
        input.style.color = 'red';
    } else {
        input.style.color = 'green';
         
  }
  btnAdd.value = ''
  btnSubtract.value = ''
  }
  
  function userClick(){
   if (isNaN(btnAdd.value) || isNaN(btnSubtract.value))
   
   return;
  
  if ( btnAdd.value == '' || btnSubtract.value == '')
  
  return;
   
   total += parseInt(btnAdd.value) / parseInt(btnSubtract.value) ;
  
  render();
  }
  
  init();
