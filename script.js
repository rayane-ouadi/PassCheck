let userInput = document.getElementById('userPassword');
let theReturn = document.getElementById('passwordCheck');

console.log("runs");




setInterval(
    function passwordQuality(){
        let userPassword = userInput.value.trim();

        if(userPassword.includes(" ", ">", "<", "*", "+", "-", "/", ",", '~','`','|', '/', '{', '}', '(', ')' )){
            theReturn.textContent = "This is an Invalid Password"
            theReturn.classList.add('bad')
        }
        else if(userPassword.includes("@", "!", "$", "&", "_") || userPassword.length > 100){
            theReturn.textContent = "Great Password";
            theReturn.classList.add('gg')
        }
        else if(userPassword.includes(".", 1,2,3,4,5,6,7,8,9)){
            theReturn.textContent = "Need to be Better";
            theReturn.classList.add('mid')
        }
        else if(userPassword.length > 5) {
            theReturn.textContent = "Weak Password";
            theReturn.classList.add('bad')
        } else if(userPassword == ''){
            theReturn.textContent = '';
        }
    }, 500
    )