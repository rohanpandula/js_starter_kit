//alert('Hey find me to know where to put the javascript');
var winning_num = Math.floor((Math.random()*100)+1)
var user_name = prompt("What is your name?")
var guess = prompt("Guess a random number between 1 and 100")



if (guess == winning_num){
  alert("YOU WIN! "+user_name)
}
else {
  alert("You lose "+user_name)
}
