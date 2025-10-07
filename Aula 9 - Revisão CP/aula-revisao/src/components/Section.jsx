export default function Section({titulo = "Titulo Padrão", children}){
    return (
        <>
            <h1>{titulo}</h1>
            {children}
        </>
    )
}
// rfc - atalho para criação da função
// children, conteudo que esta dentro da função, no caso <p>
// {titulo, children}, quebra os atributos do props em variaveis, desestruturados
// titulo = "Titulo Padrão", se não vem o titulo, aparece o padrão
