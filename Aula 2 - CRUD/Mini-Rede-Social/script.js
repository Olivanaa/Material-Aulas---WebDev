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
    mostarPosts()

    document.querySelector("#postForm").addEventListener('submit', criarPost)
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

    //adiciona o post no inicio do array
    posts.unshift(post)

    //atuliza para mostrar novo post
    mostarPosts()

}
//READ
function mostarPosts() {
    const listaPosts = document.querySelector("#postList")
    //antes de mostrar, limpa a lista de posts para não duplicar 
    listaPosts.innerHTML = ""

    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <p>${pegaItem.text}</p>
            <img src='${pegaItem.image}' style='max-width: 150px'/>
            <p>${pegaItem.category}</p>
            <p>${pegaItem.date}</p>
            <button type="submit"><i class="fa-solid fa-pen-to-square"></i>Editar</button>
            <button type="submit"><i class="fa-solid fa-eraser"></i>Apagar</button>
        `
        listaPosts.append(cardPost)
    })
}
//UPDATE
//DELETE


// acessar objeto 
console.log(posts.text);
console.log(posts[text]);

//hosting - pode chamar a função antes de declara-la, não funciona com arrow function