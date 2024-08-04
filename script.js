
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    audio.play().catch(error => {
        console.log("Autoplay was prevented, attempting to play audio after user interaction.");

        // Fallback for user interaction
        document.addEventListener("click", function() {
            audio.play();
        }, { once: true });
    });
});

var name = prompt("Enter Your Name My Friend ♥");
document.getElementById("java").innerHTML = name;
alert("Made By Syed Asif For Special Friend's !!");
console.log(name);