// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function (){
    carregarPostsLocalStorage()
    //se tiver posts no localStorage ele carrega, se não mostra o array
    mostarPosts()

    document.querySelector("#postForm").addEventListener('submit', criarPost)

    //delega eventos, retorna onde foi clicado
    document.querySelector('#postList').addEventListener('click', handleClick)


    //LocalStorage só armazena string
    // localStorage.setItem("nome", "Olivanaa")
    // console.log(localStorage.getItem("nome"));
    // localStorage.removeItem("nome")
    // localStorage.clear()

    //para transforma o obejto em string:
    //JSON.stringfy
    //de string para objeto:
    //JSON.parse
    
}

function handleClick(infosDoEvento){
    //retorna o elemento que foi clicado
    console.log(infosDoEvento.target);

    //guarda o valor da ação e do indice(data-)
    const acaoBotao = infosDoEvento.target.dataset.action
    const indicePost = infosDoEvento.target.dataset.index

    if(!acaoBotao) return //aborda e sai da função

    if(acaoBotao === "Editar"){
        console.log("Editou"); 
        editarPost(indicePost)       
    }
    else if(acaoBotao === "Apagar"){
        console.log("Apagou");
        apagarPost(indicePost)
    }    
}


//CREATE
function criarPost(infosDoEvento) {
    infosDoEvento.preventDefault()
    //evita o comportamento padrão de enviar o formulario antes de pegar as infos
    
    //pega os valores digitados
    const textoPost = document.querySelector("#postText").value
    const categoriaPost  = document.querySelector('#postCategory').value
    const imagemPost = document.querySelector('#postImage').value
    const dataPost = new Date().toLocaleString()

    //cria um novo objeto 
    const post = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    }

    //adiciona o post no inicio do array e salva no localStorage
    posts.unshift(post)
    salvarLocalStorage()

    //limpa formulário
    document.querySelector('#postForm').reset()

    //atuliza para mostrar novo post
    mostarPosts()

}
//READ
function mostarPosts() {
    const listaPosts = document.querySelector("#postList")
    //antes de mostrar, limpa a lista de posts para não duplicar 
    listaPosts.innerHTML = ""

    posts.forEach((pegaItem, index) => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <p>${pegaItem.text}</p>
            <img src='${pegaItem.image}' style='max-width: 150px'/>
            <p>${pegaItem.category}</p>
            <p>${pegaItem.date}</p>
            <button data-action="Editar" data-index=${index} type="submit"><i class="fa-solid fa-pen-to-square"></i>Editar</button>
            <button data-action="Apagar" data-index=${index} type="submit"><i class="fa-solid fa-eraser"></i>Apagar</button>
        `
        listaPosts.append(cardPost)
    })
}

//UPDATE
function editarPost(indicePost){
    const novoTexto = prompt("Edite o conteudo do seu post", posts[indicePost].text)
    posts[indicePost].text = novoTexto
    
    salvarLocalStorage()
    mostarPosts()
}

//DELETE
function apagarPost(indicePost) {

    const confirmar = confirm("Deseja realmente excluir este post?")

    if(confirmar){            
        posts.splice(indicePost, 1)    

        salvarLocalStorage()

        mostarPosts()
    }

}

function salvarLocalStorage(){
    localStorage.setItem("posts", JSON.stringify(posts))
}

function carregarPostsLocalStorage(){
    postsGuardados = localStorage.getItem("posts")

    if(postsGuardados){
        //coloca os postsGuardados no array posts
        posts = JSON.parse(postsGuardados)
    }
}


// acessar objeto 
// console.log(posts.text);
// console.log(posts[text]);

//hosting - pode chamar a função antes de declara-la, não funciona com arrow function