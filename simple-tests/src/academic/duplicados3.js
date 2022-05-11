


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
        "Sua vontade de vencer só pode ser dominada por você, jamais pelo medo.",
    },
  
    { id: 6, phrase: "Os livros são amigos que nunca nos decepcionam." },
  ];

const result = input.map(e => JSON.stringify(e))
                    .reduce((acc, cur) => {
                        (acc.includes(cur) || acc.push(cur), acc)
                    }, [])
                    .map(e => JSON.parse(e));

console.log(result);