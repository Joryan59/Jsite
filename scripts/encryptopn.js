function encrypt(){
    let plaintext = prompt("enter plaintext message");
    let ciphertext = "";
    let firstletter = "";
plaintext = plaintext.split(" ");
    for( let i = 0 ; i < plaintext.length ; i = i + 1){
       if (plaintext[i].includes("r")){ 
       firstletter = plaintext[i]; 
        ciphertext += (plaintext [i]).replace("r, w"); + firstletter + "le";
    } else { 
        ciphertext += (plaintext[i].replace(0, "r") + "le"); 
    }
    }
}
    document.getElementById("encrypted").innerHTML = ciphertext;
