while (true) {
    let rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('winner winner winner');
        break;
    } else {
        console.log('you have got', + rand);
    }
}

for (let i = 1; i <= 10; i++){
    if (i % 5 === 0) {
        break;
    } else {
        console.log(i);
    }
}
for (let i = 1; i <= 20; i++){
    if (i % 5 === 0) {
        break;
    } else {
        console.log(i);
    }
}