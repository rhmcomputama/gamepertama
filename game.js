const player = document.getElementById('player');

let playerLeft = 175;
let playerBottom = 0;
let gravity = 2; 

function jump(){
    playerBottom += 30; 
    player.style.bottom = playerBottom + 'px';
    console.log(playerBottom);
}

//menggunakan spasi untuk lompat
document.addEventListener('keydown', (KeyboardEvent) =>{
    if(KeyboardEvent.code == 'Space'){
        jump();
    }
 });

 function fall(){
    playerBottom -= gravity; 
    player.style.bottom = playerBottom + 'px';
 }

 setInterval(fall, 20);