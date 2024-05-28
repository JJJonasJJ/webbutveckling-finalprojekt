const loginform = document.getElementById("loginform")
const passwordbutton = document.getElementById("submitbutton")
const loginp = document.getElementById("logininfo")
const bookTable = document.getElementById("bok-tabell");

// passwordbutton.addEventListener("click", function (e){
//     e.preventDefault()
//     let submittedpassword = loginform.value
//     if(submittedpassword === "zzyzyva"){window.location="admin.html"}
//         else{loginp.innerText = "Fel lösenord!"}
// })

const boker = [{

    namn: "Harry Peter och flykten från upphovsrättsadvokaterna.",
    forfattare: "Grover Cleveland",
    utgivningsar: "1850",
    genre: "Äventyr",
    utlanad: "Ja",

}, {

    namn: "Sömn.",
    forfattare: "Jager Klarvaken",
    utgivningsar: "1999",
    genre: "Faktabok",
    utlanad: "Nej",

},{

    namn: "Se Uppåt!",
    forfattare: "Herr Herrstrom",
    utgivningsar: "2004",
    genre: "Skräck",
    utlanad: "Nej",

},{

    namn: "Ananas",
    forfattare: "Klara Sundström",
    utgivningsar: "2023",
    genre: "Barnbok",
    utlanad: "Ja",

},{

    namn: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo",
    forfattare: "Clara Rowley",
    utgivningsar: "2000",
    genre: "Skönlitteratur",
    utlanad: "Nej",

}]

boker.forEach((bok) => {
    const tr = document.createElement("tr");
    tr.innerHTML += `<td>${bok.namn}</td>`
    tr.innerHTML += `<td>${bok.forfattare}</td>`
    tr.innerHTML += `<td>${bok.utgivningsar}</td>`
    tr.innerHTML += `<td>${bok.genre}</td>`
    tr.innerHTML += `<td>${bok.utlanad}</td>`

    bookTable.appendChild(tr);
})
