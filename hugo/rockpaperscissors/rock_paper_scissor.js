let score=JSON.parse(localStorage.getItem('score'))||{
  win:0,
  loses:0,
  tie:0
};
updatescore();
function playermove(guess){
  const computerMove=botmove();
  let result='';
  if(guess==='Rock'){
    if(computerMove==='Rock'){
      result='Tie';
      }
      else if(computerMove==='Paper'){
      result='You lose';
      }
      else if(computerMove==='Scissors'){
       result='You win';
      }
  }
  else if(guess==='Paper'){
    if(computerMove==='Rock'){
     result='You win';
      }
      else if(computerMove==='Paper'){
     result='Tie';
      }
      else if(computerMove==='Scissors'){
     result='You lose';
      }
  }
  else if(guess==='Scissors'){
    if(computerMove==='Rock'){
      result='You lose';
      }
      else if(computerMove==='Paper'){
       result='You win';
      }
      else if(computerMove==='Scissors'){
      result='Tie';
      }
  }
  if(result==='You win'){
    score.win+=1;
  }
  else if(result==='You lose'){
    score.loses+=1;
  }
  else if(result==='Tie'){
    score.tie+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updatescore();

  
document.querySelector('.js_result')
.innerHTML=result;

document.querySelector('.js_move')
.innerHTML=` You
    <img src="./${guess}-emoji.png" class="move-icon">
    <img src="./${computerMove}-emoji.png" class="move-icon">
    Computer`
}

function updatescore(){
document.querySelector('.js_score')
.innerHTML=`wins:${score.win},loses:${score.loses},tie:${score.tie}`;
}


let computerMove='';

function botmove(){
  let randomnumber = Math.random();
  if(randomnumber>=0 && randomnumber<1/3){
    computerMove='Rock';
  }
  else if(randomnumber>=1/3 && randomnumber<2/3){
    computerMove='Paper';
  }
  else if(randomnumber>2/3 && randomnumber<1){
    computerMove='Scissors';
  }
  return computerMove;
}