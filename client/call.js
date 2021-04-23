function newMatch() {
    const dingSound = new Audio("ding.wav");
    dingSound.play()
    document.getElementById("successIndicator").innerHTML = "Success!";
    setTimeout(() => {document.getElementById("successIndicator").innerHTML = ""}, 1000)
}