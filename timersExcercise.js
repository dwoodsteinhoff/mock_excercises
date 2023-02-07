
function countDown (num){
    let count = setInterval(function(){
        num --;
        if(num <= 0){
            clearInterval(count);
            console.log('Done!');
        }
        else {
            console.log(num)
        }
    },1000)
}

function randomGame(){
    finalCount = 0;
    let timer = setInterval(function(){
        let randomNum = Math.random();
        randomNum;
        finalCount ++;
        if(randomNum > 0.75){
            clearInterval(timer);
            console.log(`It took ${finalCount} tries`);
        }
        else{

        }
    }, 1000)
}