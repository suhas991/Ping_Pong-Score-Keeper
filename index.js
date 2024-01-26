let player1=0;
let player2=0;

const but1=document.querySelector('#bp1')
const but2=document.querySelector('#bp2')
const dropdown=document.querySelector('#pingpong');
let win=dropdown.value;

document.querySelector('.p1').innerText=`${player1}`
document.querySelector('.p2').innerText=`${player2}`


dropdown.addEventListener('change',function(){
   win=dropdown.value;
   console.log(win);
})

but1.addEventListener('click',function(e){
    
    if(player1 < win && player2!=win){
        player1++;
    }else{
        alert("Don't cheat , Reset and Try again")
    }
    if(player1 == win){
    document.querySelector('.p1' ).style.color='Green' 
    document.querySelector('.p2' ).style.color='Red' 
    }

    document.querySelector('.p1').innerText=`${player1}`;
})

but2.addEventListener('click',function(e){
    if(player2 < win && player1!=win)
    player2++;
    else{
        alert("Don't cheat , Reset and Try again")
    }

    if(player2 == win){
        document.querySelector('.p1' ).style.color='red' 
        document.querySelector('.p2' ).style.color='Green' 
        }
    document.querySelector('.p2').innerText=`${player2}`;

})

document.querySelector('#reset').addEventListener('click',function(e){
    player2=0;
    player1=0;
    document.querySelector('.p1').innerText=`${player1}`;
    document.querySelector('.p2').innerText=`${player2}`;
    document.querySelector('.p1' ).style.color='black' 
    document.querySelector('.p2' ).style.color='black'

})
