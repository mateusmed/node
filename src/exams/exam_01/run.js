const utils = require('./utils');

function q1(array, alvo){

    let positions = [];

    for(let i = 0; i<= array.length; i++){
        for(let j = 0; j<= array.length; j++){

            if(array[i] === array[j]){
                continue;
            }
            let result = array[i] + array[j];

            if(result === alvo){
                positions.push(i);
                positions.push(j);
                return positions;
            }
        }
    }

    console.log("the array dont have two itens has the sum alvo variable.")
}

function q2(text){

    if(text === ''){
        return true;
    }
    let limitI, limitJ = 0;

    if(text.length % 2 === 0){
        limitI = (text.length / 2) - 1;
        limitJ = limitI + 1;
    }else{
        let medium = (text.length-1) / 2;
        limitI = medium;
        limitJ = medium;
    }

    let length = text.length - 1;

    for(let i = 0; i <= limitI; i++){

        if(!utils.isBraket(text[i])){
            continue;
        }

        for(let j = length; j >= limitJ; j--){

            if(!utils.isBraket(text[i])){
                i++;
            }
            if(!utils.isBraket(text[j])){
                continue;
            }
            if(!utils.isOpository(text[i], text[j])){
                return false;
            }

            i++;
        }
    }
    return true;
}


function q3(array) {

    let max;
    let min = {'value': array[0]};
    let list = [];

    for (let i = 0; i < array.length; i++) {

        if(array[i] <= min['value']){

            min['pos'] = i;
            min['value'] = array[i];
        }

        let newObject = {'pos':i , 'value': array[i]};

        list.push(newObject);
    }

    list = list.sort(utils.order);

    for (let i = 0; i < list.length; i++) {

        if(min['pos'] < list[i]['pos']){
            max = list[i];
            break;
        }
    }

    return `--> COMPRE NO min = ${JSON.stringify(min)}
            --> VENDA NO max = ${JSON.stringify(max)}`;
}

function q4(layer){

    let length = layer.length,
        j = 0,
        water = 0,
        maxLayer = 0;

    let matriz = [];
    let nextLayer;

    do{
        for (let i = 0; i < length; i++) {

            let currentValue = layer[i];

            // get max layer value
            if(currentValue >= maxLayer){ maxLayer = currentValue;}

            // init next layer
            if(i === 0){ nextLayer = []; }
            if(currentValue > 1){ nextLayer[i] = (currentValue - 1); }else{ nextLayer[i] = 0;}

            if(i === (length - 1)){

                water = water + utils.findZeros(layer);

                matriz.push(layer);
                layer = nextLayer;
                j++;
            }
        }

    }while(j <= maxLayer);

    console.log(matriz.reverse());

    return water;
}


function main(){

    console.log("====== Q1 =======");
    let arrayQ1 = [2, 7, 11, 15];
    let alvo = 13;
    let result01 = q1(arrayQ1, alvo);
    console.log(result01);
    console.log("=================");

    console.log("====== Q2 =======");
    let text = '';
    let result02 = q2(text);
    console.log(result02);
    console.log("=================");

    console.log("======= Q3 ======");
    let arrayQ3 = [7, 1, 5, 3, 6, 4];
    let result03 = q3(arrayQ3);
    console.log(result03);
    console.log("=================");

    console.log("====== Q4 =======");
    let arrayQ4 = [0, 1, 0, 2, 7, 0 , 5, 3, 1, 2, 1, 1, 6];
    let result04 = q4(arrayQ4);
    console.log(result04);
    console.log("=================");
}


main();


