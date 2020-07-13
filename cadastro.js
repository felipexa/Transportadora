function verificarSenha()
{ //Criamos uma função com o nome verificarSenha
var campo1 = document.getElementById("senha01").value;// Na variável campo 1 pegamos o valor do campo onde o Id é senha01.
var campo2 = document.getElementById("senha02").value;// Na variável campo 2 pegamos o valor do campo onde o Id é senha02.
if(campo1 == campo2)
{ // Verificamos se o valor do campo 1 é o mesmo do campo 2 e se for...
document.getElementById("resultado").innerHTML = "&rarr; As senhas correspondem."; //&rarr= entidade flecha. No ID resultado exibimos um texto: As senhas correspondem.
document.getElementById("resultado").style.color = "#008B45";// No mesmo ID alteramos a cor do texto para um verde;
}else{ // se os valores dos campos forem diferentes..
document.getElementById("resultado").innerHTML = "&Cross; As senhas não correspondem.";//&Cross= entidade X. No ID resultado exibimos um texto: As senhas não correspondem.
document.getElementById("resultado").style.color = "#FF6347";// No mesmo ID alteramos a cor do texto para um vermelho;
}
} 