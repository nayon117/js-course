let i = 0;
while (i < 10) {
    // console.log('Hasibul Hasan Nayon');
    i++;
}
let j = 0;
while (j < 20) {
    // console.log('Hasibul Hasan Nayon');
    i++;
}

let isRunning = true;
while (isRunning) {
    let rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('winner winner winner');
        isRunning = false;
    } else {
        console.log('you have got', + rand);
    }
}