function calcularCusto() {
    const peso = parseFloat(document.getElementById('peso').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    const unidadeTempo = document.getElementById('unidadeTempo').value;
    const lucroPercentual = parseFloat(document.getElementById('lucro').value) / 100;

    // Definir valores de custo (exemplos)
    const custoEnergiaPorHora = 1.30;
    const custoFilamentoPorGrama = 0.13;
    const custoDepreciacaoPorHora = 4.08;
    const percentualMaoDeObra = 0.30; // 30%

    // Verificar se as checkboxes estão marcadas
    const showEnergia = document.getElementById('showEnergia').checked;
    const showDepreciacao = document.getElementById('showDepreciacao').checked;
    const showMaoDeObra = document.getElementById('showMaoDeObra').checked;
    const showFilamento = document.getElementById('showFilamento').checked;

    // Converter tempo para horas se necessário
    let tempoEmHoras = unidadeTempo === 'minutos' ? tempo / 60 : tempo;

    // Calcular custos
    let custoEnergia = showEnergia ? custoEnergiaPorHora * tempoEmHoras : 0;
    let custoFilamento = showFilamento ? custoFilamentoPorGrama * peso : 0;
    let custoDepreciacao = showDepreciacao ? custoDepreciacaoPorHora * tempoEmHoras : 0;

    // Calcular custo total sem a mão de obra
    let custoTotal = custoEnergia + custoFilamento + custoDepreciacao;

    // Aplicar mão de obra se estiver marcada
    if (showMaoDeObra) {
        custoTotal *= (1 + percentualMaoDeObra);
    }

    // Calcular valor de venda com lucro
    let valorVenda = custoTotal * (1 + lucroPercentual);

    // Atualizar campos
    document.getElementById('custo').value = `R$ ${custoTotal.toFixed(2)}`;
    document.getElementById('valorVenda').value = `R$ ${valorVenda.toFixed(2)}`;
}