
let generateButton = document.getElementById("generate");
let copyButton = document.getElementById("copy");

function generate(){
    

    
    let complexity = document.getElementById("slider").value;

    
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";

    let password = "";

    
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

  
    document.getElementById("display").value = password;

   
    document.getElementById("lastPasswords").innerHTML += password + "<br />";

}


document.getElementById('length').innerHTML = "Length: 25";


document.getElementById("slider").oninput = function(){
    let sliderValue = document.getElementById("slider").value;
    if (sliderValue > 0){
        document.getElementById("length").innerHTML = `Length: ${sliderValue}`;
    }
    else{
        document.getElementById("length").innerHTML = `Length: ${1}`;
    }
}


function copyPassword(){
    document.getElementById("display").select();
    document.execCommand('copy');
    alert(`${document.getElementById("display").value} has been copied to clipboard.`);
}



generateButton.addEventListener("click", generate);


copyButton.addEventListener("click", copyPassword);


