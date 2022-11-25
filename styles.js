document.getElementById("botonmenu").addEventListener("click", desMenu)
document.getElementById("ocultarMenu").addEventListener("click", ocultMenu)
nav = document.getElementById("nav-ocult")
linetwo = document.getElementById("linetwo")
linethree = document.getElementById("linethree")
blackmenu = document.getElementById("blackmenuu")
// discord = document.getElementById("discord")
// telegram = document.getElementById("telegram")

function desMenu(){
    nav.style.left = "0px" ;
    linetwo.style.left = "2px";
    linetwo.style.opacity = "0.6";
    linethree.style.left = "4px";
    linethree.style.opacity = "0.8";
    blackmenu.style.display = "block";
    // discord.style.display = "none";
    // telegram.style.display = "none";
}

function ocultMenu(){
    nav.style.left = "-5000px";
    linetwo.style.left = "0px";
    linetwo.style.opacity = "1";
    linethree.style.left = "0px";
    linethree.style.opacity = "1";
    blackmenu.style.display = "none";
    // discord.style.display = "block";
    // telegram.style.display = "block";
}