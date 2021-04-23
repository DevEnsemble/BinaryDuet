function newChat() {
    const DING = new Audio("ding.wav");
    DING.play()
    document.getElementById("successIndicator").innerHTML = "Success!";
    setTimeout(() => {document.getElementById("successIndicator").innerHTML = ""}, 1000)
}