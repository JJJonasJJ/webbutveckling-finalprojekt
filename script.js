let loginform = document.getElementById("loginform")
let passwordbutton = document.getElementById("submitbutton")
let loginp = document.getElementById("logininfo")

passwordbutton.addEventListener("click", function (e){
    e.preventDefault()
    let submittedpassword = loginform.value
    if(submittedpassword === "zzyzyva"){window.location="admin.html"}
        else{loginp.innerText = "Fel lösenord!"}


})






























