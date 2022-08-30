function validation(){
    var form = document.getElementById("form");
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message");
    var logo =document.getElementById("logo");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var input = document.getElementById("mail");
    

    if (mail.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        message.innerHTML = "";
        logo.innerHTML = '<span id="logo"></span>';
        input.style.border = "";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        message.innerHTML = "Please provide a valid email";
        logo.innerHTML = "<img src='icon-error.svg'>";
        input.style.border = "1.5px solid hsl(0, 93%, 68%)";
        
    }
    if (mail == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        message.innerHTML = "";
        logo.innerHTML = '<span id="logo"></span>';
        input.style.border = "";
    }
}
