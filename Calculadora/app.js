// Função de adicionar um dígito ao visor
function insert(num)
    {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
    }

// Função de limpar o visor
function clean()
    {
        document.getElementById('resultado').innerHTML = "";
    }

// Função de remover o último dígito do visor
function back()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }

// Função de avaliar a expressão e exibir o resultado
function calcular()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
        else
        {
            document.getElementById('resultado').innerHTML = "Nada..."
        }
    }