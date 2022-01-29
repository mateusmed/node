
function listOfPromises(){

    let list = [];

    list.push(myPromise("fazendo tapioca", "ficou ruim pra krl"));
    list.push(myPromise("fazendo uma escolha dificil", "já escolhi"));
    list.push(myPromise("assistindo séries", "terminei"));

    return list;
}



function myPromise(acao, resposta){

    return new Promise((resolve, reject) => {

        console.log("acao - " + acao);

        setTimeout(() => {

            resolve(resposta);
        }, 3000);
    })
}

function myPromiseWithOutResolve(acao, resposta){

    return new Promise((resolve, reject) => {

        console.log("acao - " + acao);

        setTimeout(() => {

            resolve("estou cumprindo a promessa agora");
            console.log("nada");
        }, 3000);

    })
}

function myPromiseWithPromise(acao, resposta){

    return new Promise((resolve, reject) => {

        console.log("acao - " + acao);

        setTimeout(() => {

            //ok dentro do esperado - RESOLVENDO promise dentro da promise
            resolve(myPromise("fui comprar pão",
                "voltei só agora com o pão"));
        }, 4000);
    })
}

function myPromiseWithPromise2(acao, resposta){

    return new Promise((resolve, reject) => {

        console.log("acao - " + acao);

        setTimeout(() => {

            //NÃO DENTRO DO ESPERADO, NÃO LOGA A RESPOSTA DA GUITARRA
            return myPromise("tocando guitarra",
                "acabei de tocar guitarra");
        }, 5000);
    })
}

//foreach dentro da promise


module.exports = {
    myPromise: myPromise,
    myPromiseWithPromise: myPromiseWithPromise,
    myPromiseWithPromise2: myPromiseWithPromise2,
    listOfPromises:listOfPromises,
    myPromiseWithOutResolve: myPromiseWithOutResolve
};
