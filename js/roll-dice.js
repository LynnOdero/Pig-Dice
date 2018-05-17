$(document).ready(function () {
    var player_one = new player("Player One",0,true);
    var player_two = new player("Player Two",0,false);

    $('#roll-dice').on('click',function () {
      
     if(player_one.currentplayer == true)
     {
       var score = player_one.rollDice();
       if(score <= 1)
       {
           alert("Score is 1. Player Two's turn to play.")
       }
       $("#player-one-results").val(player_one.getScore());
     }
     else
     {
         var score = player_two.rollDice();
        if(score <= 1)
        {
            alert("Score is 1. Player One's turn to play.")
        }
         $("#player-two-results").val(player_two.getScore());
      }

      var playerOneScore = player_one.getScore();
      var playerTwoScore = player_two.getScore();

      if(playerOneScore >= 100)
      {
        alert("The winner of the game is "+ player_one.name);
      }
      else if(playerTwoScore >= 100){
        alert("The winner of the game is "+ player_two.name);
      }
  });





  $('#hold-play').on('click',function () {
      if(player_one.currentplayer == true)
      {
          player_one.currentplayer=false;
          player_two.currentplayer = true;
      }
      else
      {
        player_one.currentplayer=true;
        player_two.currentplayer = false;;

       }
   });

  });
