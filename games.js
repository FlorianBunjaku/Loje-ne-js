document.querySelector('.message').textContent='E nderrojme permbajtjen e elementit ne html';
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
document.querySelector('.guess').value=23;//e ndrron vleren e inputit e qet 23
console.log(document.querySelector('.guess').value);


let number=Math.trunc(Math.random()*20)+1;

let rez=Number(document.querySelector('.score').textContent);
let high=Number(document.querySelector('.highscoree').textContent);


document.querySelector('.check').addEventListener('click',function(){
   let guess =Number(document.querySelector('.guess').value);//ky funksion thirret vet ne browser e thirr js kur ndodh eventi
   if(!guess){
       document.querySelector('.message').textContent='Vendoseni nje numer';
      }
   else if(guess===number){
       document.querySelector('body').style.backgroundColor='green';
       document.querySelector('.number').style.width='20rem';
       document.querySelector('.number').style.width='39rem';
       document.querySelector('.number').textContent=number;
       document.querySelector('.message').textContent="Correct !";
       if(high<rez){
         document.querySelector('.highscoree').textContent=rez;
         high=rez
       }
      }
   
   else if(guess>number){
      if(rez>0){
      document.querySelector('.message').textContent='High';
      rez--;
      document.querySelector('.score').textContent=rez;
      }
      else
         document.querySelector('.message').textContent='Game over';
         
      
   }
   else {
      if(rez>0){
      document.querySelector('.message').textContent='Low';
      rez--;
      document.querySelector('.score').textContent=rez;
      }
      else
         document.querySelector('.message').textContent='Game over';
       
   }
   document.querySelector('.again').addEventListener('click',function(){
      document.querySelector('.message').textContent='Start guessing';
      document.querySelector('.score').textContent=20;
      document.querySelector('.number').textContent='?';
      document.querySelector('.number').style.height='10rem';
      document.querySelector('.number').style.width='20rem';
      document.querySelector('body').style.backgroundColor='black';
      rez=20;
       number=Math.trunc(Math.random()*20)+1;

   })
   
 
       
   
});
