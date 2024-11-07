function calcularImovel(event) {
    event.preventDefault(); // Evita o envio do formulário e recarregamento da página

    // Pegando os dados do formulário
    const quartos = parseInt(document.getElementById("quartos").value);
    const metragem = parseFloat(document.getElementById("metragem").value);
    const preco = parseFloat(document.getElementById("preco").value);
    const tipoImovel = document.querySelector('input[name="residencia"]:checked').id;

    // Validação básica
    if (isNaN(quartos) || isNaN(metragem) || isNaN(preco) || preco <= 0 || quartos <= 0 || metragem <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calculando o preço final baseado no número de quartos
    let precoFinal = metragem * preco;
    switch (quartos) {
        case 1:
            precoFinal *= 1.0;
            break;
        case 2:
            precoFinal *= 1.2;
            break;
        case 3:
            precoFinal *= 1.3;
            break;
        case 4:
            precoFinal *= 1.4;
            break;
        default:
            precoFinal = 0;
    }

    // Ajuste para tipo de imóvel (Apartamento tem um custo adicional)
    if (tipoImovel === "apartamento") {
        precoFinal *= 1.1; // Exemplo: 10% a mais para apartamentos
    }

    // Exibindo o resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor final do imóvel é: <strong>R$ ${precoFinal.toFixed(2)}</strong>`;
}
