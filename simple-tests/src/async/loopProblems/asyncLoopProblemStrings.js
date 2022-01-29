

async function exampleProblemAsync(list){

    let a = "";

    for(let i = 0; i < list.length; i++) {

        setTimeout(() =>{
            a = a + list[i];
        }, 500);
    }

    return a;
    // should be "item1item2item3"
    // but return empty string
}

async function exampleFixProblem(list){

    let a = [];

    let promises = [];

    for(let i = 0; i < list.length; i++) {

        promises.push(new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve(a.push(list[i]));
            }, 500);
        }));
    }

    await Promise.all(promises);

    return a.join();
}

async function main(){

    let list = ["item1", "item2", "item3"]
    let response1 = await exampleProblemAsync(list);
    let response2 = await exampleFixProblem(list);

    console.log("response exampleProblemAsync ==>", response1);
    console.log("response exampleFixProblem ==>", response2);
}

main();