// Infinity for loop

for (; ;){
    let rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('winner winner winner');
        // isRunning = false;
        break;

    } else {
        console.log('you have got', + rand);
    }  
}