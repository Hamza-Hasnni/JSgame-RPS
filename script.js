const computerPlay =()=>{
    const rPS = ["rock","paper","scissors"];
    let rand = rPS[Math.floor(Math.random()*rPS.length)];
    return rand;
}

const userPlay = ()=>{
    let palyerchoice =["rock","paper","scissors"];
    let choice;
    
    
     do {
        choice= prompt("Select your choice: 'Rock', 'Paper' or 'Scissors'") ;
     } while (palyerchoice.indexOf(choice.toLocaleLowerCase()) === -1);
   
   
   return choice.toLocaleLowerCase();
}

const playRound =(playerSelection, computerSelection) =>{
     if(playerSelection === computerSelection){
        return 'Draw'
     }else if(playerSelection ==="rock" && computerSelection ==="paper"){
        return false
     }else if(playerSelection ==="paper" && computerSelection ==="rock"){
        return true
     }else if (playerSelection ==="scissors" && computerSelection ==="paper"){
        return true
     }else if (playerSelection ==="paper" && computerSelection ==="scissors"){
        return false
     }else if (playerSelection ==="scissors" && computerSelection ==="rock"){
        return false
     }else {
        return true
        
     }
}



const game = ()=>{
    alert("Are you ready to play 5 round of 'Rock' 'Paper' 'Scissors' Game!")

    let player = 0, computer = 0, draw = 0;
    for (let i = 0; i < 5; i++) {
        
        let result = playRound(userPlay(),computerPlay())
        if (result == true) {
             player += 1;
         } else if(result == false){
             computer += 1
         }else {
            draw += 1
         }
       
    }
        if (player > computer) {
            alert(`This is your LUCKY! day. \n \nThe result is player= ${player} computer= ${computer} draw= ${draw} ` ) 
            
        } else if(computer>player){
            alert(`You are not lucky today Computer beats YOU!\n\nThe result is player= ${player} computer= ${computer} draw= ${draw} ` ) 
        }  else{
            alert(`You and Computer the same LUCK! \n\nThe result is player= ${player} computer= ${computer} draw= ${draw} ` ) 
        }
}


game()





