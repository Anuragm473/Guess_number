/*document.querySelector('.message').textContent=('chalu karte hai');
document.querySelector('.number').textContent=10;
document.querySelector('.score').textContent=12;
document.querySelector('.guess').value=11;*/
let number=Math.trunc(Math.random()*20+1);
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if (guess==0){
        document.querySelector('.message').textContent='No Number';
    }else if(guess>number){
        document.querySelector('.message').textContent='To High.. :)';
    }else if(guess<number){
        document.querySelector('.message').textContent='Too Low.. :(';
    }else{
        document.querySelector('.message').textContent='Yaee You guessed Right..';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=number;
        if (score>highScore){
            document.querySelector('.highscore').textContent=score;
            highScore=document.querySelector('.highscore').value=score;
        }
    }
    if(guess!=number){
        score--;
        document.querySelector('.score').textContent=score;
    };
    if(score<1){
        document.querySelector('.message').textContent='You lost';
    };
    document.querySelector('.again').addEventListener('click',function(){
        score=20
        document.querySelector('.score').textContent=score;
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
        number=Math.trunc(Math.random()*20+1);
    })
});
