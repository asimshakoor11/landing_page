

// page load events 
let popup = document.getElementById("popupcont");
let lastdiv = document.getElementById("lastcont");
let maincontent = document.getElementById("maincont");
let formbox = document.getElementById("formbox");


window.addEventListener('load', function(){
    popup.className +=" display1";

});

function closepopup(){
    popup.classList.remove("display1");
}

function handledisplay(){
    
    if ((document.getElementById('name').value == "") || (document.getElementById('email').value == "") || (document.getElementById('message').value == "") ){
        alert("Kindly! First fill the required details")
    }

    else{
        maincontent.className +=" hidecon"; 
    lastdiv.classList.remove("hidecon");
    }
}

