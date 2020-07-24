// Déclarer le tableau des unité de Un à 19
var unitNumbers = ['zero','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize','dix-sept','dix-huit','dix-neuf'];
// Déclarer le tableau utilise pour calculé les dizaines
var aboutTenNumbers = ['dix','vingt','trente','quarante','cinquente','soixante','soixante-dix','quatrevingt','quatrevingt-dix'];
// Déclarer le tableau utilisé pour calculé les centaines
var oneHundredNumbers = ['cent'];

// 

function check_number(number){
    let stringNumber = number.toString();
    let checkNumber =  parseInt(number,10);
    return checkNumber;
}

// Fonction qui récupère la longueur d'un nombre
function number_to_string(number){
    let checkNumber = check_number(number);
    let number_to_string = checkNumber.toString();
    let lengthNumber = number_to_string.length;
    return lengthNumber;

    
}
console.log("resultat: "+number_to_string(1111));

// Fonction qui récupère les unités d'un nombre
/*function numberOfUnits(number){
    let numberLenght = number_to_string(number);
    
}*/

// Fonction qui récupère les dizaines d'un nombre
// Fonction qui récupère les centaines d'un nombre

