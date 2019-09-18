

changeColor = x => {
    if (x) document.body.style.backgroundColor = x;
}
changeBC = () => {
    let d = (new Date()).getSeconds();
    const color = d < 10 && "#ff8" ||
                  d > 10 && d < 20 && "#dd9" ||
                  d > 20 && d < 30 && "#ad8" ||
                  d > 30 && d < 40 && "#fc6" ||
                  d > 40 && d < 50 && "#cdc" ||
                  d > 50 && d < 60 && "#af7" ||
                  false
    changeColor(color);
}

setInterval(function() {
    changeBC();
}, 1000);

