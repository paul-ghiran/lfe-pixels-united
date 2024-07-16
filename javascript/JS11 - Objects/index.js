// Obiectele sunt structuri de date multidimensionale

const exempluString = 'Paul';
const exempluNumar = 12;

const exempluObiect = {
    nume: 'Paul',
    varsta: 12
}

console.log("EX OBJ", exempluObiect)
console.log("EX OBJ2", exempluObiect.nume)
console.log("EX OBJ3", exempluObiect.varsta)
console.log("EX OBJ4", exempluObiect.telenovelaPreferata)

console.log("Procedeu fast forward 17 ani")
exempluObiect.varsta = 29;

console.log(exempluObiect)
exempluObiect.telenovelaPreferata = 'Maria Consuela y los 8 gatos';


console.log(exempluObiect)
console.log(exempluObiect.telenovelaPreferata)
console.log("Ca array, dar nu chiar", exempluObiect['nume']);

// exempluObiect.nume este absolut identic / egal cu exempluObiect['nume'];

function citesteProprietate(obiectDeProcesat, proprietateaCareTrebuieCitita) {
    return obiectDeProcesat[proprietateaCareTrebuieCitita]
};

console.log(citesteProprietate(exempluObiect, 'nume'));