


function methodA(num1, num2){

    console.log(num1);
    console.log(num2);

    methodB();

    return num1 + num2;
}


function methodB(){

    console.log("teste32");

    let list = [1, 2, 3, 4, 5]

    for(let item of list){
        console.log(item);
    }

    console.log("ok");
}




methodA(1, 2);