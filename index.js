let nomeUsuario = document.getElementById("nome").value;
let anoNascimento = Number(document.getElementById("nascimento").value);
let anoAtual = Number(document.getElementById("anoAtual").value);



anoAtual = Number (anoAtual);
idadeUsuario = Number (idadeUsuario);


alert ("Voce tem " + anoNascimento + " ano ")
if (anoNascimento <= 19){
  alert ("Você nao tem idade para acessar" + nomeUsuario + "!")
}else{
  alert ("Você tem idade para prosseguir, " + nomeUsuario + ".")
}




