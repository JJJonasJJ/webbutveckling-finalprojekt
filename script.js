const bookTable = document.getElementById("tabell-body");
const bookFooter = document.getElementById("tabell-footer");

//listan av de olika böckerna bibloteket har, gjort så att man kan lätt göra ett formulär/verktyg
//för att lätt lägga till nya böcker. Han inte göra något sådant dock ¯\_(ツ)_/¯
const boker = [{

    namn: "Harry Peter och flykten från upphovsrättsadvokaterna.",
    forfattare: "Grover Cleveland",
    utgivningsar: "1850",
    genre: "Äventyr",
    utlanad: "Utlånad",
    lanareid: "00112306589",
    footcheck: false

}, {

    namn: "Sömn.",
    forfattare: "Jager Klarvaken",
    utgivningsar: "1999",
    genre: "Faktabok",
    utlanad: "Finns tillgänglig att låna",
    lanareid: "Ej utlånad",
    footcheck: false

},{

    namn: "Se Uppåt!",
    forfattare: "Herr Herrstrom",
    utgivningsar: "2004",
    genre: "Skräck",
    utlanad: "Finns tillgänglig att låna",
    lanareid: "Ej utlånad",
    footcheck: false

},{

    namn: "Ananas",
    forfattare: "Amanda Sundström",
    utgivningsar: "2023",
    genre: "Barnbok",
    utlanad: "Utlånad",
    lanareid: "88817772365",
    footcheck: false


},{

    namn: "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo",
    forfattare: "Clara Rowley",
    utgivningsar: "2000",
    genre: "Skönlitteratur",
    utlanad: "Finns tillgänglig att låna",
    lanareid: "Ej utlånad",
    footcheck: true,


}]


//Kod som skapar ny html-kod genom att loopa igenom boker så att html-filerna inte behöver
//vara en enorm mängd svårläst text som är nästan identisk. 
//istället så genereras den efterfrågade koden här!
if(window.location.pathname === "/index.html"){

    boker.forEach((bok) => {
        const tr = document.createElement("tr");
        if(bok.footcheck === false){
            tr.innerHTML += `<td>${bok.namn}</td>`
            tr.innerHTML += `<td>${bok.forfattare}</td>`
            tr.innerHTML += `<td>${bok.utgivningsar}</td>`
            tr.innerHTML += `<td>${bok.genre}</td>`
            tr.innerHTML += `<td>${bok.utlanad}</td>`
            bookTable.appendChild(tr);
        }
        if(bok.footcheck === true){
            tr.innerHTML += `<td>${bok.namn}</td>`
            tr.innerHTML += `<td>${bok.forfattare}</td>`
            tr.innerHTML += `<td>${bok.utgivningsar}</td>`
            tr.innerHTML += `<td>${bok.genre}</td>`
            tr.innerHTML += `<td>${bok.utlanad}</td>`
            bookFooter.appendChild(tr);
        }
    })
}




//kod som har med lanareid eftersom det ska bara vara admins som kan se det.
if(window.location.pathname === "/admin.html"){
    boker.forEach((bok) => {
        const tr = document.createElement("tr");
        if(bok.footcheck === false){
            tr.innerHTML += `<td>${bok.namn}</td>`
            tr.innerHTML += `<td>${bok.forfattare}</td>`
            tr.innerHTML += `<td>${bok.utgivningsar}</td>`
            tr.innerHTML += `<td>${bok.genre}</td>`
            tr.innerHTML += `<td>${bok.utlanad}</td>`
            tr.innerHTML += `<td>${bok.lanareid}</td>`
            bookTable.appendChild(tr);
        }
        if(bok.footcheck === true){ //kollar om det är den sista boken i listan (eller boken med footcheck === true) är det det så läggs raden i tfoot så att unik styling kan appliceras
            tr.innerHTML += `<td>${bok.namn}</td>`
            tr.innerHTML += `<td>${bok.forfattare}</td>`
            tr.innerHTML += `<td>${bok.utgivningsar}</td>`
            tr.innerHTML += `<td>${bok.genre}</td>`
            tr.innerHTML += `<td>${bok.utlanad}</td>`
            tr.innerHTML += `<td>${bok.lanareid}</td>`
            bookFooter.appendChild(tr);
        }
    })
}

