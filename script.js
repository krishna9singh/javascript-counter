const plusbutton = document.getElementById("plus_button")
const countervalue = document.getElementById("counter_value")
const dec_value = document.getElementById("sub_button")
const reset_value = document.getElementById("reset_button")


let count = 0;



plusbutton.addEventListener("click",function() {

    count++;
    countervalue.textContent = count;

     updateColor() ;

    
} )

dec_value.addEventListener("click" , function() {
 if(count > 0){
    count--;
   
 }
  countervalue.textContent = count;
    
     updateColor() ;

})

reset_value.addEventListener("click" , function(){

    count = 0;
    countervalue.textContent = count;


     updateColor() ;

})


function updateColor() {

    if (count > 0) {
        countervalue.style.color = "green";
    }
    else if (count < 0) {
      countervalue.style.color = "red";
    }
    else {
         countervalue.style.color = "Darkblue";
    }

}
