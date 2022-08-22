//initialize the count to 0
//listen for clicks on increament button
//increment the count when the button is clicked
//change the count-el in te html to reflect the new count
 let count = 0;
 let countEl = document.getElementById('count-el');
 let saveEl = document.getElementById('save-el');
function increment(){
   count +=1;
   countEl.textContent = count;
   }

 function save(){
     let countStr = count + " - ";
     saveEl.textContent += countStr;//alternate for innertext to get the spaces
     countEl.textContent = 0;
     count= 0;
 } 