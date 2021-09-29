interface Usuario{
    nome: string;
    email: string;
    telefone?: string;
}
function enviarEmails({nome, email}: Usuario){
    console.log(`Enviar e-mail para ${nome} com e-mail ${email}`)
}

enviarEmails({
 nome:"Giovanni",
 email:"vannibiel11@gmail.com"});