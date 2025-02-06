const colorOption = ['red', 'blue', 'green', 'purple', 'yellow', 'orange'];
const resultDisplay = document.getElementById("resultDisplay");
const computerDisplay = document.getElementById("computerDisplay");
let player = 0;
let computer = 0;


function restart(){
    player = 0;
    computer = 0;
    playerScore.textContent = player;
    computerScore.textContent = player;
    computerDisplay.classList.remove("redCol", "blueCol", "greenCol", "purpleCol", "yellowCol", "orangeCol");
    computerDisplay.textContent = "GUESS ME"
    resultDisplay.textContent = "";
}


function playGame(playerChoice){
    
    //RANDOMCOLOR
    const computerChoice = colorOption[Math.floor(Math.random() * 6)];

    let result = "";

    if(playerChoice == computerChoice){
        result = "YOU'RE RIGHT🤩!";
    }
    else{
        result = "YOU'RE WRONG😞!";
    }


   //CORRECTGUESS
    computerDisplay.classList.remove("redCol", "blueCol", "greenCol", "purpleCol", "yellowCol", "orangeCol");
    switch(computerChoice){
        case "red":
            computerDisplay.classList.add("redCol");
            break;
        case "blue":
            computerDisplay.classList.add("blueCol");
            break;
        case "green":
            computerDisplay.classList.add("greenCol");
            break;
        case "purple":
            computerDisplay.classList.add("purpleCol");
            break;
        case "yellow":
            computerDisplay.classList.add("yellowCol");
            break;
        case "orange":
            computerDisplay.classList.add("orangeCol");
            break;
        
    }

    
    //ANIMATION
    function triggerAnimation() {
        emoji.style.animation = 'none';
        emoji.offsetHeight; 
        emoji.style.animation = 'fadeInShake 2s forwards';
    }


    function createConfetti() {
        const container = document.body;
    
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
    
       
            confetti.style.left = `${Math.random() * window.innerWidth}px`;
            confetti.style.top = `${Math.random() * window.innerHeight}px`;
            confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
    
            container.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            },1000);
        }
    }

    function fadeIn(){
        resultDisplay.classList.add("fade");
        setTimeout(() => {
            resultDisplay.classList.remove("fade");
        },1000);
    }

    //RESULT
    resultDisplay.classList.remove("greenText", "redText")
    switch(result){
        case "YOU'RE RIGHT🤩!":
            createConfetti();
            resultDisplay.classList.add("greenText");
            player++;
            playerScore.textContent = player;
            break;
        case "YOU'RE WRONG😞!":
            fadeIn();
            resultDisplay.classList.add("redText");
            computer++;
            computerScore.textContent = computer;
            break;
    }

    
    
    resultDisplay.textContent = `${result}`;
    computerDisplay.textContent =`RIGHT ANSWER` ;
}