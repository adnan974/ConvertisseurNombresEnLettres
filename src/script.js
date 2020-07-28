// Déclarer le tableau des unité de Un à 19
var arrayUnitNumbers = {0:'zero',1:'un',2:'deux',3:'trois',4:'quatre',5:'cinq',6:'six',7:'sept',8:'huit',9:'neuf'};
var arrayNumber10To19 = {10:'dix',11:'onze',12:'douze',13:'treize',14:'quatorze',15:'quinze',16:'seize',17:'dix-sept',18:'dix-huit',19:'dix-neuf'}
// Déclarer le tableau utilise pour calculé les dizaines
var arrayAboutTenNumbers = {null:'',1:'dix',2:'vingt',3:'trente',4:'quarante',5:'cinquente',6:'soixante',7:'soixante',8:'quatrevingt',9:'quatrevingt'};
// Déclarer le tableau utilisé pour calculé les centaines
var arrayOneHundredNumbers = {null:'',1:'cent',2:'deux-cent',3:'trois-cent',4:'quatre-cent',5:'cinq-cent',6:'six-cent',7:'sept-cent',8:'huit-cent',9:'neuf-cent'};


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

console.log("nb unité : "+numberOfUnits(450));



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

console.log("rnb dizaine : "+numberOfTens(450));

// Fonction qui récupère les centaines d'un nombre
function numberOfHundred(number){
    let numberLenght = length_number(number);
    let unitNumbers =  numberOfUnits(number);
    let result;

    switch(numberLenght){
        case 3:
            result = (number - number%100)/100;
            break;
        case 2,1:
            result = 0;
        default:
            result = null;
    }
    return result;
}

console.log("nb centaine : "+numberOfHundred(450));

function convertisseurNbVersLettre(number){

    let unitNumbers = numberOfUnits(number);
    console.log("unit: "+unitNumbers);
    let numberOfTen = numberOfTens(number);
    console.log("dizaine: "+numberOfTen);
    let _numberOfHundred = numberOfHundred(number);
    console.log("centaine: "+_numberOfHundred);

    let result;

    if (number < 10){
        result = arrayUnitNumbers[number];
        console.log("result: "+result);
    }else if (number > 10 && number < 20){
        result = arrayNumber10To19[number];
        console.log("result: "+result);
    }else{
        if (numberOfTen == 7 || numberOfTen == 9){
            console.log('on rentre')
            result = arrayOneHundredNumbers[_numberOfHundred]+" "+arrayAboutTenNumbers[numberOfTen]+" "+arrayNumber10To19[unitNumbers+10];
        }else{
            result = arrayOneHundredNumbers[_numberOfHundred]+" "+arrayAboutTenNumbers[numberOfTen]+" "+arrayUnitNumbers[unitNumbers];
        }
    }
    return result;

}

console.log("Resultat:"+convertisseurNbVersLettre(52));
