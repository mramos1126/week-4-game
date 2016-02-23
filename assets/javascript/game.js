

//numbers between 19 through 120 will be randomly picked and the player has to match the number to win.

function cpu() {
    document.getElementById("#cpu").innerHTML =
    Math.floor(Math.random() * 101 + 19);
}

  
   //       

 var score= function();
        for (var i = 0; i <1 ;i++){
          var num = (Math.floor((Math.random()*12) +1));
          two += num; 
         
        
//  numbers between 1 through 12 will be randomly be picked when clicking on the images
$("#red").click(function(){
  score();
}

$("#green").click(function(){
  score();
}

$("#blue").click(function){
  score();
}
$("yellow").click(function){
  score();
}
// the score of the point should up on the div box.
$("score").append("points"){return};


// the points generated from the clicked image decide whether player wins,loses or the score will be updated.

if  (points == cpu) {
            wins++;
            
            alert( "You Win!");computerGuess = reset(); 
        
        }
    
if (points > cpu){losses++;
           alert("You Lose!");computerGuess = reset(); 
        
        
      }

      else {
        points();
      }


        