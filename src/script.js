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
function length_number(number){
    let checkNumber = check_number(number);
    let number_to_string = checkNumber.toString();
    let lengthNumber = number_to_string.length;
    return lengthNumber;

    
}

//console.log("resultat: "+length_number(1111));

// Fonction qui récupère les unités d'un nombre
function numberOfUnits(number){

    let numberLenght = length_number(number);
    let result;

    console.log(numberLenght);
    switch(numberLenght){
        case 3:
        case 2:
            result = number%10;
            break;
        case 1:
            result = number;
            break;
        default:
            result = null;
            
    }

    return result;
    
}

//console.log("resultat: "+numberOfUnits(8));



// Fonction qui récupère les dizaines d'un nombre
function numberOfTens(number){
    let numberLenght = length_number(number);
    let unitNumbers =  numberOfUnits(number);
    let result;

    switch(numberLenght){
        case 3:
            result = ((number%100) - unitNumbers)/10 ;
            break;
        case 2:
            result = (number - unitNumbers)/10;
            break;
        case 1:
            result = (number - unitNumbers);
            break;
        default:
            result= null;
    }
    return result;
}

console.log("resultat: "+numberOfTens(55));

// Fonction qui récupère les centaines d'un nombre
/*function numberOfHundred(number){
    let numberLenght = length_number(number);
    let unitNumbers =  numberOfUnits(number);
    switch(numberLenght){
        case 3:
            return (number - unitNumbers)/100;
            break;
        case 2,1:
            return 0;
        default:
            return null;
    }
}*/
