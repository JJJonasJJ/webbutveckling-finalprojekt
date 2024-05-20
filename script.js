let loginform = document.getElementById("loginform")
let passwordbutton = document.getElementById("submitbutton")
let loginp = document.getElementById("logininfo")

passwordbutton.addEventListener("click", function (e){
    e.preventDefault()
    let submittedpassword = loginform.value
    if(submittedpassword === "zzyzyva"){window.location="admin.html"}
        else{loginp.innerText = "Fel lösenord!"}


})


let bok1 = {

    bokomslag: "",
    namn: "Harry Peter och flykten från upphovsrättsadvokaterna.",
    forfattare: "Grover Cleveland",
    utgivningsar: "1850",
    genre: "Äventyr",



}



























