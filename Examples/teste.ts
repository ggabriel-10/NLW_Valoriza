interface Usuario{
    nome: string, email: string, telefone?: string // o "?" depois da Variavel indica que a variavel é opcional
} //nomeDaVariavel:tipoDaVariavel    -  Definindo a tipagem da Variavel

function enviarEmail( {email,nome,telefone}: Usuario){
    console.log(`Olá ${nome} seu e-mail é ${email} e seu telefone ${telefone}`)
}

enviarEmail( {
    email: "vannibiel11@gmail.com",
    nome: "Giovanni",
    telefone: "11 951269796"
}
 )