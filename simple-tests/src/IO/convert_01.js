'use strict';

const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');

const path = '/home/mateus.santos/dev/stream_logs/';
const fileRead = `${path}fromS3/txts/merged-file`;
const fileOutputTotal = `${path}/relatorio/relatorio_success.csv`;
const fileOutputFail = `${path}relatorio/relatorio_fail.csv`;


//todo objetivo:
//unificar arquivos em uma pasta de logs
// consumir desses unico arquivo, aplicar uma regra
// transformar em um csv no final


function joinLogFiles(){
    // executar comando que unifica arquivos de texto
}

function readFile(){
    let rawdata = fs.readFileSync(fileRead, 'utf8');
    return rawdata.split("\n");
}


async function buildCsv(data, filePath){
    const csv = new ObjectsToCsv(data);
    await csv.toDisk(filePath);
}

function writeFile(data){

    fs.writeFile("/tmp/test", data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}


function cleanLog(){

    // limpar o log dado um padrão

    let data = readFile();

    let masterObj = {};

    for (let i = 0; i < data.length; i++) {

        let line = data[i];

        try{

            let json = JSON.parse(line);


        }catch (e) {
            console.log(`line is not a object: ${line}`);
        }
    }

    return masterObj;
}

function fail(obj){

    // validação se o objeto é valido sim ou não.

    return false
}



async function main() {

    let masterObj = cleanLog();

    let listError = [];
    let listSuccess = [];

    for (let obj in masterObj) {

        let objectSplit = obj.split(':');

        if(fail(masterObj[obj])){
            listError.push({
                // adicionar novo objeto
            });
        }else{

            listSuccess.push({
                //adicionar novo objeto
            });
        }
    }

    console.log(`numero de erros: ${listError.length}` );
    console.log(`numero de erros: ${JSON.stringify(listError)}` );

    await buildCsv(listSuccess, fileOutputTotal);
    await buildCsv(listError, fileOutputFail);
}

main();

