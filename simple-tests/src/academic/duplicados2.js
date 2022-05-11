/**
 * Questão 2:
 * Crie uma função que remova os itens com IDs duplicados do array
 * de objetos abaixo:
 */

 const input = [
    {
      id: 1,
      phrase: "O caminho nunca é largo demais quando um amigo nos acompanha.",
    },
    {
      id: 2,
      phrase:
        "O nosso amor a gente inventa pra se distrair e quando acaba, a gente pensa que ele nunca existiu.",
    },
    {
      id: 3,
      phrase:
        "Cada sonho realizado é composto por pequenas batalhas vencidas no dia a dia.",
    },
    {
      id: 3,
      phrase:
        "Cada sonho realizado é composto por pequenas batalhas vencidas no dia a dia.",
    },
    {
      id: 4,
      phrase:
        "Sempre haverá uma falha, inclusive poderá ser até mesmo na primeira tentativa. Não desista!",
    },
    {
      id: 5,
      phrase:
        "Sua vontade de vencer só pode ser dominada por você, jamais pelo medo.",
    },
    {
      id: 5,
      phrase:
        "Sua vontade de vencer só pode ser dominada por você, jaaaaamais pelo medo.",
    },
  
    { id: 6, phrase: "Os livros são amigos que nunca nos decepcionam." },
  ];





               //filter(funcation)

               /*

function minhaFuncaoPorParametro(){
    console.log("ok, teste 32");
    return true;
}               

function meuFiltro(minhaFuncaoPorParametro){

  if(minhaFuncaoPorParametro()){
    return "ok, a função q vc passou por parametro retornou true";
  }
  return "ok, a função q vc passou por parametro retornou false";
}


let response = meuFiltro(minhaFuncaoPorParametro);
console.log(response);

let response = meuFiltro(()=>{
    console.log("ok, teste 32");
    return true;
});

let response = meuFiltro(function myFunction(){
  console.log("ok, teste 32");
  return true;
});


console.log(response);

*/


let newList = [{"id": 1, "name": "mateus"}, 
               {"id": 1, "name": "mateus med"}, 
               {"id": 2, "name": "israel"}];

let response = newList.filter(function (item){

  // !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);

  let contextList = this;

  if(!contextList.includes(item.id)){
    contextList.push(item.id);
    return true;
  }

}, []);

function removeDuplicateEntriesFromListByPropName(list, prop) {

  const map = {};

  /*
  
  {"1": {"id": 1, "name": "mateus"}}
  
  */

  for (const item of list) {
    const id = item[prop];

    // Irá inserir no "mapa" somente elementos cujo o ID não estiver lá.
    if (!map[id]) {
      map[id] = item;
    }
  }

  // No final, retorne os valores do mapa:
  return Object.values(map);
}


let ok = removeDuplicateEntriesFromListByPropName(newList, "id");
console.log("response ", ok);

