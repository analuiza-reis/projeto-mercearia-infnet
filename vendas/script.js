//funções podem ter mais de 1 return
function validarCamposObrigatorios(oProduto, aQuantidade, oPrecoUnitario, aDataTransacao){
    return oProduto && aQuantidade != null && oPrecoUnitario != null && aDataTransacao; //retorna true se todos os campos estiverem preenchidos, e false se algum campo estiver vazio
}

function validarQuantidadeProdutos(aQuantidade){
    return aQuantidade > 0; 
}

function validarPrecoUnitario(oPrecoUnitario){
    return oPrecoUnitario > 0; 
}

function registrarDataTransação(){
    return new Date().toLocaleString(); 
}

function registarVenda(){
    let produto = "Arroz";
    let quantidade = 5;
    let precoUnitario;

    let dataTransacao = registrarDataTransação();

    let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
    let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade);
    let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);

    if(validaCamposObrigatorios){
        if(validaQuantidadeProdutos){
            if(validaPrecoUnitario){
                alert("Transação registrada com sucesso!\nProduto: " + produto + ", quantidade: " +quantidade+" unidades, preço unitário R$"+precoUnitario+", data da transação: "+dataTransacao);
            } else {
                alert("Problema na validação de Preço Unitário!");
            }
        } else {    
            alert("Problema na validação de quantidade de produtos!");
        }
    } else {
        alert("Problema na validação de campos obrigatórios!");
    }
}

registarVenda("Arroz", 5, 10); //chamada da função
registarVenda("Feijão", 3, 20); //chamada da função
registarVenda("Farofa", 1, 5); //chamada da função