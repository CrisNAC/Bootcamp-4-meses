console.log("page loaded...");

function over(element){
    element.play();
}

function out(element){
    element.currentTime = 0;
    element.pause();
}
