
const promises = require('./promises');



function methodB() {

    promises.myPromise("arrumando a mala", "a mala esta pronta")
        .then(response => {
            console.log("então: " + response);

            //o return é necessário, essa analise é importante; <<======
            return promises.myPromise("apanhando de node", " vou dominar essa porr");
        })
        .then(response => {
            console.log("então: " + response);
        })
        .catch(reason => {
            console.log("a razão é: " + reason);
        });
}


function methodC() {

    let p =  promises.myPromiseWithPromise("lutando boxe", "levei um soco");

    p.then(response => {
        console.log("e então: " + response);
    });
}


function methodD() {

    let p =  promises.myPromiseWithPromise2("boxe", "levei um soco");

    p.then(response => {
        console.log("e então: " + response);
    });
}

function methodE() {

    let list = promises.listOfPromises();

    console.log("a lista é: " + list);

    Promise.all(list)
        .then(responseList =>{
            console.log("logando as respostas: " + responseList);
            responseList.map(response => {
                console.log("resposta: " + response);
            });
        })
        .catch(error =>{
            console.log("deu algum error" + error);
        });

}

//então quer dizer q isso aqui funciona?
function methodF(){

    let listAction = ["item1", "item2", "item3"];

    let p = promises.myPromise("fui cortar o cabelo",
        "voltei mais bonito");

    p.then(result =>{

        listAction.forEach(item => {

            promises.myPromise(item, "response:" + item)
                .then(result => {
                    console.log("response do " + item + " é : " + result);
                })
                .catch(error => {
                    console.log("deu merda aqui mano: " + error);
                })

        })
    })
}

function methodG(){

    promises.myPromiseWithOutResolve("vá", "volta")
        .then(result => {
            console.log("response : " + result);
        })
        .catch(error => {
            console.log("deu merda aqui mano: " + error);
        })
}

function methodH(){

    return new Promise((resolve, reject)=> {


        promises.myPromiseWithOutResolve("vá", "volta")
            .then(result => {

                resolve(result);

            })
            .catch(error => {
                console.log("deu merda aqui mano: " + error);
            });
    });

}

function main(){
    methodH()
        .then((result)=> {
            console.log("result do H: " + result);
            return methodB();
        })
        .then((result) => {
            console.log("result do B: "+ result)
        })

}

main();

