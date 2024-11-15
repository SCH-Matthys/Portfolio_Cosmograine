function randomBackground(){
    const background = document.getElementById("background");
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1){
        background.style.backgroundImage = "url(./../assets/img/bg1.jpeg)";
    } else if (randomNumber === 2){
        background.style.backgroundImage = "url(./../assets/img/bg2.jpg)";
    } else {
        background.style.backgroundImage = "url(./../assets/img/bg3.jpg)";
    }
}

randomBackground();