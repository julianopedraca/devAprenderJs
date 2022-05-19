// velocidade máxima de 70
// a cada 5km acima do limite você ganha 1 ponto na carteira
// math.Floor()_ para arredondar
// caso os pontos sejam maior que 12 = "carteira suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const variacaoVelocidade = velocidade - 70
    let pontos

    if (velocidade <= 70){
        return console.log('velocidade permitida');
    }
    else if (velocidade >70){
        pontos = Math.floor(variacaoVelocidade / 5);
        console.log(pontos);
            if (pontos >= 12)
            console.log('carteira suspensa');
    }

}