

function soma(){
    return 1 + 2;
}


function requestHttp(){

    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(3 + 4);
        }, "1000");
    }));
}


async function soma2(){

    let mySum = 0;

    let response = await requestHttp();

    console.log("teste ====>" + response);

    // return mySum;
}

async function myMain(){

    let myReturn = await soma2();

    console.log("my return " + myReturn);
}

myMain();

// if(soma() + soma2() === 10){
//     console.log("teste32")
// }
//
//
// function pedidoJantar(){
//     setTimeout(() => {
//         console.log("Delayed for 1 second.");
//     }, "200");
// }
//
// pedidoJantar();
//
// console.log("ok");
