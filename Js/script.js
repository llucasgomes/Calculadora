
//funcao para exiber os numeros
function insert(num)
{
    //A variavel NUMERO irá receber o valor que ja se encontra no #resultado
    var numero = document.getElementById('resultado').innerHTML; 

    //Iremos jogar este valor, após.. o novo
    document.getElementById('resultado').innerHTML = numero + num ; 
}

//funcao para limpar


function apagar()
{
    //Irá receber um valor zero ou vazio
    document.getElementById('resultado').innerHTML = " ";
}

function voltar()
{
    //A variavel resultado irá receber o valor que ja se encontra no #resultado
    var resultado = document.getElementById('resultado').innerHTML;

    //Substring() : É um metodo utilizado para extrair uma sequência de caracteres de uma string.=>> string.substring(posicaoInicial , posicaoFinal)
    //Lengt() : Utilizar a propriedade length para obter o tamanho de uma String ou de um array.
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length  - 1);

}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if('resultado')
    {
        //A função eval() computa um código JavaScript representado como uma string.
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}
