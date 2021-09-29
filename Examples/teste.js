function enviarEmail(_a) {
    var email = _a.email, nome = _a.nome, telefone = _a.telefone;
    console.log("Ol\u00E1 " + nome + " seu e-mail \u00E9 " + email + " e seu telefone " + telefone);
}
enviarEmail({
    email: "vannibiel11@gmail.com",
    nome: "Giovanni",
    telefone: "11 951269796"
});
