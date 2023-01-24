function gameOver()
{
    let checkCount = 0;
    for(let i = 0; i < checkArray.length; i++)
    {
        if(checkArray[i] === true)
        {
            checkCount++;
            if(checkCount === 6)
            {
                //alert('Game Over!');
                //change text to Game Over
                document.getElementById("text").innerHTML = "Game Over!!!";
            }
        }
    }
}
function play()//plays audio 
{
    var audio = document.getElementById("audio");
    audio.play();
}

function showAnswers()
{
    document.getElementById("hints").style.visibility = "visible";
}

let checkArray = [false,false,false,false,false,false];

window.onload = function()
{
    console.log(checkArray);
    const first = document.querySelector('#Pink');
    first.addEventListener('click', function (){
        //first.style.background = 'red';
        first.classList.add("redcircle")
        //console.log("hit");
        //console.log('clicked1');
        checkArray[0] = true;
        //console.log(checkArray);
        gameOver();
        play();
    })
    const second = document.querySelector('#Bloop');
    second.addEventListener('click', function (){
        //second.style.background = 'yellow';
        second.classList.add("redcircle")
        //console.log('clicked2');
        checkArray[1] = true;
        //console.log(checkArray);
        gameOver();
        play();
    })
    const third = document.querySelector('#Pillow1');
    third.addEventListener('click', function (){
        //third.style.background = 'blue';
        third.classList.add("redcircle")
        //console.log('clicked3');
        checkArray[2] = true;
        //console.log(checkArray);
        gameOver();
        play();
    })
    const fourth = document.querySelector('#Pillow2');
    fourth.addEventListener('click', function (){
        //fourth.style.background = 'green';
        fourth.classList.add("redcircle")
        //console.log('clicked4');
        checkArray[3] = true;
        //console.log(checkArray);
        gameOver();
        play();
    })
    const fifth = document.querySelector('#Pillow3');
    fifth.addEventListener('click', function (){
        //fifth.style.background = 'white';
        fifth.classList.add("redcircle")
        //console.log('clicked5');
        checkArray[4] = true;
        //console.log(checkArray);
        gameOver();
        play();
    })
    const sixth = document.querySelector('#Pillow4');
    sixth.addEventListener('click', function (){
        //fifth.style.background = 'white';
        sixth.classList.add("redcircle")
        //console.log('clicked5');
        checkArray[5] = true;
        //console.log(checkArray);
        gameOver();
        play();
    })
}