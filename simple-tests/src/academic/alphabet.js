import fs from 'fs';


function saveFile(content){
    fs.writeFileSync('/tmp/test-sync', `${content}`);
}

//aaabacadaeafagahaiajakalamanaoapaqarasatauavawaxayaz


function getLetterAfter(letter, value){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    let index = alphabet.indexOf(letter);
    index = index + value;

    return alphabet[index];
}

// aaa, aab, aac ... aaz
// aba, abc, abd,
function another(letter, value){

    console.log("size of letter " , letter.length);

    let lastLetter = letter.substr(letter.length - 1);

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let index = alphabet.indexOf(lastLetter);

}


function getAlphabet(){
    return "abcdefghijklmnopqrstuvwxyz".split('');
}

// G
// AZ
function appendAlphabet(alphabetInput){

    let list = [];

    //let size = lastColumn.length;
    let alphabet = getAlphabet();

    for(let first of alphabetInput){
        for(let second of alphabet){
            list.push(`${first}${second}`);
        }
    }

    return list;
}

//melhorar respeitando o inicial e o final
function getAllPossibilities(value){

    let finalAlpha = [];

    let alphabet = getAlphabet();
    finalAlpha.push(...alphabet);

    if(value === 0 ){
        console.log("retornando finalAlpha === 0");
        return finalAlpha;
    }

    let count = 1;

    while(count <= value){
        alphabet = appendAlphabet(alphabet);
        finalAlpha.push(...alphabet);
        count++;
    }

    console.log(finalAlpha.length);
    console.log(finalAlpha);

    saveFile(finalAlpha);
    return finalAlpha;
}

// G
// AZ
function step(firstColumn, lastColumn, interval){

    let possibilities = getAllPossibilities(lastColumn.length-1);

    let list = [];

    // construir o intervalo

    let index = possibilities.indexOf(firstColumn);

    for(let i = index; i <= possibilities.length; i = i + interval){

        console.log("==>", i);
        list.push(possibilities[i]);
    }

    console.log(list);
}

step("zza", "zzz", 3);

/*
let response = getLetterAfter("ac", 2);
another("ac", 2);

console.log(response);
*/




