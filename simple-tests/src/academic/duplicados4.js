
item1 = {
    "name": "item1",
    "type":"flyingLeads",
    "technicals":[
        {
            "name":"waterDepth",
            "value":2000,
            "unit":"m"
        },
        {
            "name":"Diameter",
            "value":400,
            "unit":"m"
        }
    ]
};


item2 = {
    "name": "item2",
    "type":"flyingLeads",
    "technicals":[
        {
            "name":"waterDepth",
            "value":2000,
            "unit":"m"
        },
        {
            "name":"Diameter",
            "value":300,
            "unit":"m"
        }
    ]
};


item3 = {
    "name": "item3",
    "type":"flyingLeads",
    "technicals":[
        {
            "name":"waterDepth",
            "value":2000,
            "unit":"m"
        },
        {
            "name":"Diameter",
            "value":400,
            "unit":"m"
        }
    ]
};



function compareTechnicalObj(technicalA, technicalB){

    if( technicalA.name === technicalB.name &&
        technicalA.value === technicalB.value &&
        technicalA.unit === technicalB.unit ){
        return true;
    }

    return false;
}


function compareTechnicalListInvalid(technicalListA, technicalListB){

    let quantidade = technicalListA.length;

    //todo ordenar os itens da lista

    for(let i = 0; i <= quantidade - 1; i++){

        if(!compareTechnicalObj(technicalListA[i], technicalListB[i])){
            return true;
        }
    }

    return false;
}

function equals( itemA, itemB) {
    return !notEquals(itemA, itemB);
}


// return boolean
function notEquals( itemA, itemB) {

    if( itemA.type !== itemB.type){
        return true;
    }

    // todo fazer uma comparação to tamanho das listas

    if( itemA.technicals.length !== itemB.technicals.length){
        return true;
    }

    if(compareTechnicalListInvalid(itemA.technicals, itemB.technicals)){
        return true;
    }

    return false;
}

function getListaItensNaoRepetidos(listaInput){

    let listFinal = [];

    //tipo um filtro
    for(let itemInput of listaInput){

        if(listFinal.length === 0){
            listFinal.push(itemInput);
            continue;
        }

        for(let itemFinal of listFinal){

             if(notEquals(itemInput, itemFinal)){

                 console.log("=============== ");
                 console.log("===>", itemInput.name);
                 console.log("===>", itemFinal.name);
                 console.log("nao sao iguais");
                 console.log("=============== ");
                listFinal.push(itemInput);
                continue;
             }
             break;
        }
    }

    return listFinal;
}

function main(){

    let listToVerify = [ item1, item2, item3 ];

    let listaFinal = getListaItensNaoRepetidos(listToVerify);
    console.log(JSON.stringify(listaFinal, null, 2));
}


/**

    entregar esse problema pro israel daqui a 5 anos, formado e bem sucedido

 **/

main();





