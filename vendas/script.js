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

function gerarNumeroTransacao(){
    return Math.floor(Math.random() * 10000);
}

function registrarHistoricoAlteracao(aMensagem){
    const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
    const liHistorico = document.createElement("li");
    liHistorico.textContent = aMensagem;
    ulHistoricoAlteracao.appendChild(liHistorico);
}

function registarVenda(produto, quantidade, precoUnitario){
    let dataTransacao = registrarDataTransação();
    let numeroTransacao = gerarNumeroTransacao();

    let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
    let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade);
    let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);

    if(validaCamposObrigatorios) {
        if(validaQuantidadeProdutos) {
            if(validaPrecoUnitario) {
                return "["+numeroTransacao+"]"+"Transação registrada! " + produto + ", quantidade: " +quantidade+" unidades, preço unitário R$"+precoUnitario+", data da transação: "+dataTransacao;
            } else {
                return "Problema na validação de Preço Unitário!";
            }
        } else {    
            return "Problema na validação de quantidade de produtos!";
        }
    } else {
        return "Problema na validação de campos obrigatórios!";
    }
}

function vender(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let precoUnitario = document.getElementById("precoUnitario").value;

    const mensagem = registarVenda(produto, quantidade, precoUnitario);

    registrarHistoricoAlteracao(mensagem);
}