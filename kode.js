// let bilde = document.getElementById("bilde");
const bildetekst = document.getElementById("bildetekst");

let bildeGalleriMedTekst = [
    { "bilde" : "granvin.jpg",     "bildeTekst" : "Granvin, utkikspunktet" },
    { "bilde" : "ingebjørgnuten.jpg", "bildeTekst" : "Vårski på Ingebjørgnuten" },
    { "bilde" : "midtfjell.jpg",  "bildeTekst" : "Elisabeth på Midtfjell" },
    { "bilde" : "nesheimshorgi.jpg", "bildeTekst" : "Nesheimshorgi, frå Haugse" },
    { "bilde" : "olastøl_skåndalshorgi.jpg",  "bildeTekst" : "Påskeski på Olastøl" },
    { "bilde" : "olastøl_sommar.jpg", "bildeTekst" : "Olastøl, frå Nesheimshorgi" },
    { "bilde" : "skiglede.jpg", "bildeTekst" : "Ski gjer, og ski tar" },
    { "bilde" : "ulriken.jpg", "bildeTekst" : "Bergen, frå Ulriken" },
    { "bilde" : "vetlahorgi.jpg", "bildeTekst" : "Telttur på Vetlahorgi" },
];

// Byrjar med at det første biletet i arrayen vises
let aktivtBilde = 0;

// Gamal løysing, der me viser fram eit bilete vha img-taggen
// bilde.src = "bilder/" + bildeGalleriMedTekst[aktivtBilde].bilde;

// Ny løysing, der biletet er bakgrunnen på heile nettsida
document.body.style.backgroundImage = `url(bilder/${bildeGalleriMedTekst[aktivtBilde].bilde})`;
bildetekst.innerText = bildeGalleriMedTekst[aktivtBilde].bildeTekst;

// Køyrer skiftBilde-funksjonen så ofte som tidsintervallet tilseier
tidsintervall = 10000;
let endring = setInterval(skiftBilde, tidsintervall);

// Funksjonen som faktisk byter biletet
function skiftBilde() {
    aktivtBilde = aktivtBilde + 1;
    
    if (aktivtBilde >= bildeGalleriMedTekst.length) { // Sjekker om jeg kommer utenfor arrayen, altså ikke noe bilde
        aktivtBilde = 0;
    }
    
    // Ny versjon
    document.body.style.backgroundImage = `url(bilder/${bildeGalleriMedTekst[aktivtBilde].bilde})`;
    bildetekst.innerText = bildeGalleriMedTekst[aktivtBilde].bildeTekst;
    
    // Gamal versjon
    // bilde.src = "bilder/" + bildeGalleriMedTekst[aktivtBilde].bilde;
}

// Lyttar etter at brukaren trykker på tastaturet
document.addEventListener("keydown", (event) => {
    // Dersom brukaren trykker på i (eller I), så opnast og endrast innstillingane
    if (event.key === "i" || event.key === "I") {
        let nyttTidsintervall = prompt("Angi nytt tidsintervall i millisekunder:", tidsintervall);
        if (nyttTidsintervall !== null) {
            tidsintervall = parseInt(nyttTidsintervall);
            clearInterval(endring);
            endring = setInterval(skiftBilde, tidsintervall);
        }
    }

    // Dersom brukaren trykker på p (eller P), så spelast ei lydfil av
    if (event.key === "p" || event.key === "P") {
        // Copyright for musikken: https://pixabay.com/music/dubstep-soulsweeper-252499/
        let lyd = new Audio("musikk/soulsweeper-252499.mp3");
        lyd.play();
    }
});