const bookTable = document.getElementById("bok-tabell");

const boker = [{

    namn: "Harry Peter och flykten från upphovsrättsadvokaterna.",
    forfattare: "Grover Cleveland",
    utgivningsar: "1850",
    genre: "Äventyr",
    utlanad: "Utlånad",

}, {

    namn: "Sömn.",
    forfattare: "Jager Klarvaken",
    utgivningsar: "1999",
    genre: "Faktabok",
    utlanad: "Finns tillgänglig att låna",

},{

    namn: "Se Uppåt!",
    forfattare: "Herr Herrstrom",
    utgivningsar: "2004",
    genre: "Skräck",
    utlanad: "Finns tillgänglig att låna",

},{

    namn: "Ananas",
    forfattare: "Amanda Sundström",
    utgivningsar: "2023",
    genre: "Barnbok",
    utlanad: "Utlånad",

},{

    namn: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo",
    forfattare: "Clara Rowley",
    utgivningsar: "2000",
    genre: "Skönlitteratur",
    utlanad: "Finns tillgänglig att låna",

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
