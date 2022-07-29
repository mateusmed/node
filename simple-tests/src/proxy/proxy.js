

const handler = {

    // faça ao pegar um atributo
    get: (target, key) => {

        console.log("========================================================================");
        console.log("[TARGET] - o objeto recebido para fazer o target:", target);
        console.log("[KEY] - a chave que foi solitada pelo key objeto do proxy: ", key);

        if(key !== "urlRequested"){
            console.log("chave não encontrada no obj passado ao proxy");
            console.log("retornando null");
            console.log("========================================================================");
            return null;
        }


        if(target.urlRequested === "http://localhost:3000/ok"){
            console.log("========================================================================");
            let defaultValue = "http://localhost:3000/anotherEndpoint";

            console.log("retornando um valor defautl ",  defaultValue);
            return defaultValue
        }

    },

    set: (target, key, value) => {

        console.log("========================================================================");
        console.log("[TARGET] - o objeto recebido para fazer o target:", target);
        console.log("[KEY] - a chave que foi solitada pelo key objeto do proxy: ", key);
        console.log("[VALUE] - o valor a ser recebido ao fazer um set no obj proxy: ", value);

        if(!target[key]){
            console.log("propriedade naõ encontrada, não fazer nada");
            console.log("========================================================================");
            return;
        }

        if(target[key]){

            console.log("o target possui a chave");
            console.log(`o proxy atualizou a property do obj proxyado ${key} com o valor value`);
            target[key] = value;
            console.log("========================================================================");
        }


    }


};



const alvo = {
    urlRequested: "http://localhost:3000/ok"
};


const alvoProxy = new Proxy(alvo, handler);

let response1 = alvoProxy.myProperty;
console.log("[response1] - proxy retornou: ", response1);

let response2 = alvoProxy.urlRequested;
console.log("[response2] - proxy retornou: ", response2);

let response3 = alvoProxy.myProperty;
console.log("[response3] - proxy retornou: ", response2);


alvoProxy.urlRequested = "nova_url_requested";
console.log("[response3] - o valor da pripriedade foi alterado para: ", alvoProxy);
