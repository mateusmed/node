
async function myListSolution(json) {

    let result = [];
    let promises = [];

    for (let attr in json) {

        promises.push(new Promise((resolve, reject) => {
            setTimeout(() => {

                resolve(result.push(json[attr]));
            }, 200);
        }));
    }

    await Promise.all(promises)

    console.log("return result")
    return result;

}

async function myListProblem(json) {

    let result = [];

    for (let attr in json) {

        setTimeout(() => {
            console.log("item ", json[attr]);
            result.push(json[attr]);
        }, 200);
    }

    console.log("return result")
    return result;

}


async function problem(){

    let json = {
        "id": 1,
        "name": "name32",
        "age": 28
    }

    let response = await myListProblem(json);
    console.log("response is --> ", response);

}

async function solution(){

    let json = {
        "id": 1,
        "name": "name32",
        "age": 28
    }

    return await myListSolution(json);
}


function main(){

    problem()
        .then((value => {
            console.log("try resolved problem", value);
        }))
        .catch((error) => {
            console.log("error ", error);
        })


    solution()
        .then(value => {
            console.log("try resolved solution ", value);
         })
         .catch((error) => {
             console.log("error ", error);
         })
}

main();