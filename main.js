window.addEventListener("keydown", my_keydown);
var value = false;
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    value = false;
        if(keyPressed >= 65 & keyPressed <= 90)
        {
            console.log("ABC's");
            document.getElementById("Img").src = "Alpkey.png";
            value = true;
        }
        if(keyPressed >= 48 & keyPressed <= 57)
        {
            console.log("123's");
            document.getElementById("Img").src = "numkey.png";
            value = true;
        }
        if(keyPressed >= 37 & keyPressed <= 40)
        {
            console.log("<^>");
            document.getElementById("Img").src = "Arrkey.png";
            value = true;
        }
        if(keyPressed == 27){
            console.log("SK");
            document.getElementById("Img").src = "spkey.png";
            value = true;
        }
        if(keyPressed == 18){
            console.log("SK");
            document.getElementById("Img").src = "spkey.png";
            value = true;
        }
        if(keyPressed == 17){
            console.log("SK");
            document.getElementById("Img").src = "spkey.png";
            value = true;
        }
        if(value == false){
            document.getElementById("Img").src = "otherkey.png";
        }
}
