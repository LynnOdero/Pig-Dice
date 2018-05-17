var player = function(name,score,currentplayer) 
{
  this.name = name;
  this.score = score;
  this.currentplayer = currentplayer;
  this.WinningScore = 100;
  this.LosingScore = 1;
  this.MaximumScore = 6;

  this.increaseScore = function(newscore) {
      this.score = this.score + newscore;
      return score;
  }
  this.resetScore = function () {
      this.score = 0;
  }

  this.getScore = function() {
      return this.score;
  }
  this.generateScore = function  () {
    var score = Math.floor((Math.random() * this.MaximumScore) + 1);
      if (score == 0) {
        score = 1
      }
  return score;
}

  this.rollDice = function(){
    var playscore =  this.generateScore();
       if(playscore <= this.LosingScore){
           this.resetScore();
           this.currentplayer = false;
       }
       else{
         this.increaseScore(playscore);
       }
       return this.score;
  }
  

}