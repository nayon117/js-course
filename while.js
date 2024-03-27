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
let k = 0;
while (k < 25) {
    // console.log('Hasibul Hasan Nayon');
    i++;
}
let f = 0;
while (f < 50) {
    // console.log('type 50 times');
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