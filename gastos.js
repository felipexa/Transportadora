/*GASTOS FIXOS*/
function id(valor_campo)
{
    return document.getElementById(valor_campo);
}
function getValor(valor_campo)
{
    var valor=document.getElementById(valor_campo).value;
    return parseFloat(valor);
}
/*função que vai realizar a soma dos valores inseridos nos input de gastos fixos*/
function soma()
{
    var total=getValor('n1')+getValor('n2')+getValor('n3')+getValor('n4')+getValor('n5');
    id('resultado').value=total;
}


/*GASTOS VARIAVEIS*/
function id(valor_campo2)
{
    return document.getElementById(valor_campo2);
}
function getValor(valor_campo2)
{
    var valor=document.getElementById(valor_campo2).value;
    return parseFloat(valor);
}
/*função que vai realizar a soma dos valores inseridos nos input de gastos variáveis*/
function soma2()
{
    var total=getValor('n6')+getValor('n7')+getValor('n8')+getValor('n9')+getValor('n10')+getValor('n11')+getValor('n12')+getValor('n13')+getValor('n14');
    id('resultado2').value=total;
}


/*TOTAL DE GASTOS FIXOS E VARIAVEIS*/
function id(valor_campo3)
{
    return document.getElementById(valor_campo3);
}
function getValor(valor_campo3)
{
    var valor=document.getElementById(valor_campo3).value;
    return parseFloat(valor);
}
/*função que vai realizar a soma do total de gastos fixos e variáveis*/
function soma3()
{
    var total=getValor('resultado')+getValor('resultado2');
    id('resultado3').value=total;
}


/*LUCRO FRETE E ARMAZENAMENTO DE CARGAS*/
function id(valor_campo4)
{
    return document.getElementById(valor_campo4);
}
function getValor(valor_campo4)
{
    var valor=document.getElementById(valor_campo4).value;
    return parseFloat(valor);
}
/*função que vai realizar a soma dos valores inseridos nos input de frete e armazenamento de cargas gerando um total do lucro*/
function soma4()
{
    var total=getValor('n15')+getValor('n16');
    id('resultado4').value=total;
}
