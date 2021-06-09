var readlineSync = require('readline-sync');

var score=0;

var userName=readlineSync.question('What is your name? ');

console.log('Welcome '+userName+'to Do you know Avishkar?');

function play(question,answer){
  var userAns=readlineSync.question(question);
  if(userAns===answer){
    score=score+1;
    console.log('Right!');
  }else{
     console.log('Wrong!');
  }
  console.log('Current score is ',score);
  console.log('________________________');
}

var questionOne={
  question:'Where do I live? ',
  answer:'Mumbai'
};

var questionTwo={
  question:'My favorite superhero would be? ',
  answer:'Batman'
};

var questions=[questionOne,questionTwo];

for(let i=0;i<questions.length;i++){
play(questions[i].question,questions[i].answer);
}


