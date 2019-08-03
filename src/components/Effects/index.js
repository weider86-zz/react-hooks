import React, { useState, useEffect } from 'react';

function Effects() {
  
  const [counter, setCounter] = useState(0);

  //funcao com 2 parametros:
  //primeiro uma funcao a ser executada (podendo adicionar um retorno como espécie de fallback) 
  //e segundo uma variável quando devera ser executada

  useEffect(
    //funcao como primeiro parametro
    () => {
      document.title = counter;

      //funcao como espécie de fallback, funciona 'parecido' com o método lifeCycle componentWillUnmout
      return () => document.title = 'React App using Hooks'
    }, 
    //variável para quando deve ser executada a funcao inserida no primeiro parametro, 'parecido' com o método lifecycle componentDidUpdate
    //se passar vazio ou não passar nada, funciona 'parecido' com o método componentDidMount
    [counter]
  );

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Sub</button>
    </>
  )
}

export default Effects;