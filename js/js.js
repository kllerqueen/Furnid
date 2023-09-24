<<<<<<< HEAD
const hamburger_Button = document.getElementsByClassName('hamburger_button')[0]
const navbar_Button = document.getElementsByClassName('navbar_button')[0]


hamburger_Button.addEventListener('click', () =>{
    navbar_Button.classList.toggle('active')
})

document.getElementById("form").addEventListener
("submit",()=>{
    let email=document.getElementById("email").value;

    if(email.length < 5){
        alert("Email must be more than 5 characters.")
    }

    if(!email.endsWith(".com")){
        alert("Your email must be valid.")
    }


=======
const hamburger_Button = document.getElementsByClassName('hamburger_button')[0]
const navbar_Button = document.getElementsByClassName('navbar_button')[0]


hamburger_Button.addEventListener('click', () =>{
    navbar_Button.classList.toggle('active')
})

document.getElementById("form").addEventListener
("submit",()=>{
    let email=document.getElementById("email").value;

    if(email.length < 5){
        alert("Email must be more than 5 characters.")
    }

    if(!email.endsWith(".com")){
        alert("Your email must be valid.")
    }


>>>>>>> 5d85cc09f42aca014c2625d5549839a118750c3b
})