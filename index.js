const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1-el")
let pass2El = document.getElementById("pass2-el")
let pass1 = random()
let pass2 = random()

function random() {
    let password = " "
    for (let i = 0; i < 15; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        password += characters[randomNum]
    }  
    return password
}

function generate(){
    pass1 = random()
    pass2 = random()
    render()
}

function render(){
    pass1El.textContent = pass1
    pass2El.textContent = pass2
}

