
let player= {
    name:"Rs",
    chips:143
 }
// let firstcard=ramdomcard();
// let secondcard=ramdomcard();
let cards=[]
let sum=0;
let hasblackjack=false
let isalive=true
let massage=" ";
let massageEl=document.getElementById("massage1")
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");


   let playerEl=document.getElementById("player-el")
    playerEl.textContent= "per:"+ "$"+ player.name+player.chips

function ramdomcard(){
    let ramdomnumber=Math.floor(Math.random()*13)+1
    if(ramdomnumber>10){
        return 10
    }
    else if(ramdomnumber===1){
        return 11
    }
    else{
        return ramdomnumber
    }

}

function startgame(){
    isalive=true;
    let firstcard=ramdomcard();
    let secondcard=ramdomcard()
      cards=[firstcard,secondcard];
      sum=firstcard+secondcard;
    rendergame()
}

function rendergame()
{
    cardEl.textContent="cards: "
    for( let i=0; i<cards.length; i++){
        cardEl.textContent +=cards[i]+" "
    }
    

    sumEl.innerText= "sum: " + sum
    if(sum<=20){
    massage=("Do you want to draw a new card?")
    }
    else if(sum===21){
    massage=("wohoo! you've got blackjack!")
    hasblackjack=true;
    }
    else{
    massage=("your out of the game!");
    isalive=false;
    }
    massageEl.innerText=massage   
}
 function newcard(){
    if(isalive===true && hasblackjack===false){
    let card=ramdomcard();
    sum +=card;
    cards.push(card)
    rendergame()
    }

 }