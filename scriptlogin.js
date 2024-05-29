const loginform = document.getElementById("loginform")
const passwordbutton = document.getElementById("submitbutton")
const loginp = document.getElementById("logininfo")

passwordbutton.addEventListener("click", function (e){
    e.preventDefault()
    let submittedpassword = loginform.value

    if(submittedpassword === "zzyzyva"){window.location="admin.html"}
        else{loginp.innerText = "Fel lösenord!";   loginp.style.color = "red"}
})

//simpelt, kollar om lösenordet användaren skrivit in är rätt eller inte, är det rätt så kommer man till admin.html