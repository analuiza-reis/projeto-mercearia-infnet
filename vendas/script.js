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

function registrarHistoricoAlteracao(aMensagem, ehSucesso=true){
    const ulHistoricoAlteracao = document.getElementById("historicoAlteracao");
    const divAlertContainer = document.getElementById("alertContainer");
    divAlertContainer.style.display = "none";

    if(ehSucesso){
        const liHistorico = document.createElement("li");
        liHistorico.textContent = aMensagem;
        ulHistoricoAlteracao.appendChild(liHistorico); 
    } else {
    divAlertContainer.style.display = "block";
    divAlertContainer.className = "alert alert-info";
    divAlertContainer.innerHTML = "<strong>Atenção! </strong>" + aMensagem;
    }
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
                return {
                    mensagem: "["+numeroTransacao+"]"+"Transação registrada! " + produto + ", quantidade: " +quantidade+" unidades, preço unitário R$"+precoUnitario+", data da transação: "+dataTransacao,
                    sucesso: true
                };
            } else {
                return {
                    mensagem: "Problema na validação de Preço Unitário!", 
                    sucesso: false
                };
            }
        } else {    
            return {
                mensagem: "Problema na validação de quantidade de produtos!",
                sucesso: false
            };
        }
    } else {
        return {
            mensagem: "Problema na validação de campos obrigatórios!",
            sucesso: false
        };
    }
}

function vender(){
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let precoUnitario = document.getElementById("preco").value;

    const objeto = registarVenda(produto, quantidade, precoUnitario);

    registrarHistoricoAlteracao(objeto.mensagem, objeto.sucesso);
}