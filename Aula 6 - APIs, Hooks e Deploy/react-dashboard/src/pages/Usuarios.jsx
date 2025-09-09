import { useEffect, useState } from "react";

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //pega a resposta da promessa e transforma em json
     //.then(data => console.log(data)) //guarde em data e mostra no console
    .then(data => setUsuarios(data)) //guarde em data e atualize o estado como oq esta vindo dos dados
    .catch(error => console.log(error)) //pega os erros
    .finally(console.log("Acabou")) //deu certo ou errado, é a ultima coisa que vai fazer

  }, []) 

  //hook para lidar com eventos externos useEffect, recebe uma função de callback, dentro dela o que quer que lide com os efeitos, sem o [], toda vez que a info atualizar, vai fazer a renderização, array vazio para so quando recarregar faz somente uma vez
  //tudo que for guardar e é dinamico, sera guardado em um estado, set metodo que atualiza o valor desse estado
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(pegaItem => (
        <div key={pegaItem.id}> 
          <p>Nome: {pegaItem.name}</p>
          <p>E-mail: {pegaItem.email}</p>
          <p>Endereço: {pegaItem.address.street}, {pegaItem.address.suite}, {pegaItem.address.city}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

// usuarios.map((pegaItem, indice) => (
       // <div key={indice}> //react precisa de um identificar unico, indice do array, mas pode mudar, usar id do banco de dados
